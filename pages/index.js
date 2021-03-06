import Head from "next/head";
import { CreateGameForm } from "../components/CreateGame";
import { ActiveGames } from "../components/ActiveGames";
import styled, {css} from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";
import { History } from "../components/GameHistory";

export default function Home() {
  const [myGames, setMyGames] = useState([]);
  const numberOfActiveGames = (myGames.filter(element => element.isActive === true)).length
  const numberOfFinishedGames = (myGames.filter(element => element.isActive === false)).length

  console.log(myGames)

  function newGame({ gameName, gamePlayers }) {
    const newGame = {
      nameOfGame: gameName,
      players: gamePlayers.map((name) => ({
        name: name,
        score: 0,
        id: nanoid(),
      })),
      isActive: true,
      gameId: nanoid(),
    };

    setMyGames([...myGames, newGame]);
  }

  function increase(playerid, gameid) {
    const thisGame = myGames.find((element) => element.gameId === gameid);

    const thisPlayer = thisGame.players.find(
      (element) => element.id === playerid
    );
    const newScore = thisPlayer.score + 1;
    const playersNew = thisGame.players.map((element) =>
      element === thisPlayer ? { ...thisPlayer, score: newScore } : element
    );

    const thisGameNew = { ...thisGame, players: playersNew };
    setMyGames(
      myGames.map((element) => (element === thisGame ? thisGameNew : element))
    );
  }

  function decrease(playerid, gameid) {
    const thisGame = myGames.find((element) => element.gameId === gameid);

    const thisPlayer = thisGame.players.find(
      (element) => element.id === playerid
    );
    const newScore = thisPlayer.score - 1;
    const playersNew = thisGame.players.map((element) =>
      element === thisPlayer ? { ...thisPlayer, score: newScore } : element
    );

    const thisGameNew = { ...thisGame, players: playersNew };
    setMyGames(
      myGames.map((element) => (element === thisGame ? thisGameNew : element))
    );
  }

  function endGame(gameId){
    const thisGame = myGames.find((element)=>(element.gameId === gameId))
    const newGames = myGames.map((element)=>(element === thisGame ? {...element, isActive: false} : element))
    setMyGames(newGames)

  }

  function deleteGame(thisGameId){
    let currentGames = myGames
    const thisGameIndex = currentGames.find((element)=>(element.gameId === thisGameId))
    currentGames.splice(thisGameIndex,1)
    setMyGames(currentGames)
  }


  console.log(myGames)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppFrame>
          <BasicFrame>
            <CreateGameForm newGame={newGame} />
          </BasicFrame>
          <ActiveGamesFrame>
            <ActiveGamesHeadline visible={numberOfActiveGames}>Active Games</ActiveGamesHeadline>
            <ActiveGames
              myGames={myGames}
              increase={increase}
              decrease={decrease}
              endGame = {endGame}
            />
          </ActiveGamesFrame>
          <HistoryFrame>
          <HistoryHeadline visible={numberOfFinishedGames}>History</HistoryHeadline>
            <History
              myGames={myGames}
            />
          </HistoryFrame>
        </AppFrame>
      </main>
    </div>
  );
}

const AppFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 5vw;
  width: 100vw;
  padding: 5vw;
  color: #4c4a8f;

  @media screen and (min-width: 500px) {
    gap: 2rem;
    padding: 2rem;
  }
`;

const BasicFrame = styled.div`
  width: 90vw;

  @media screen and (min-width: 500px) {
    width: 500px;
  }

  display: flex;
  justify-content: flex-start;
`;

const ActiveGamesFrame = styled.div`
  width: 90vw;

  @media screen and (min-width: 500px) {
    width: 500px;
  }

  display: flex;
  flex-direction: column;
`;

const HistoryFrame = styled.div`
  width: 90vw;

  @media screen and (min-width: 500px) {
    width: 500px;
  }

  display: flex;
  flex-direction: column;
`;

const ActiveGamesHeadline = styled.h2`
align-self: center;
font-size: 2rem;
text-transform: uppercase;
margin-top: 0;
margin-bottom: 1rem;

${props =>
  props.visible === 0 &&
  css`
 display: none;
  `}

animation: fade 1s;
@keyframes fade {
  0% { opacity:0% }
  100% { opacity:100%}
}
`

const HistoryHeadline = styled.h2`
align-self: center;
font-size: 2rem;
text-transform: uppercase;
margin-top: 0;
margin-bottom: 1rem;

${props =>
  props.visible === 0 &&
  css`
 display: none;
  `}

animation: fade 1s;
@keyframes fade {
  0% { opacity:0% }
  100% { opacity:100%}
}
`