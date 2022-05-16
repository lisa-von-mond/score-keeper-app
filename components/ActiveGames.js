import styled, {css} from "styled-components";
import { MyButton } from "./Button";

export function ActiveGames({ myGames, increase, decrease, endGame }) {
  return (
    <div>
      {myGames.map((game) => (
        <OneGame key={game.gameId} visible={game.isActive}>
          <NameDiv>{game.nameOfGame}</NameDiv>

          {game.players.map((element) => (
            <PlayerDiv key={element.id}>
              <p>{element.name}</p>
              <Counter>
                <MyButton
                  text="dec"
                  click={() => {
                    decrease(element.id, game.gameId);
                  }}
                />
                <Score>
                  <p>{element.score}</p>
                </Score>
                <MyButton
                  text="inc"
                  click={() => {
                    increase(element.id, game.gameId);
                  }}
                />
              </Counter>
            </PlayerDiv>
          ))}
          <MyButton text="end game" click={() => {
                  endGame(game.gameId)}}/>
        </OneGame>
      ))}
    </div>
  );
}

const OneGame = styled.div`
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  box-shadow: 5px -5px #9795f0;
  border: 3px solid #9795f0;

  padding: 2rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 500px) {
    align-items: space-between;
  }

  ${props =>
    props.visible === false &&
    css`
   display: none;
    `}

animation: appear 0.5s;

@keyframes appear {
  0% { transform: scale(0%) }
  80% {  transform: scale(105%)}
  100% { transform: scale (100%) }
}
`;

const Score = styled.div`
display:flex;
justify-content: center;
width:2rem;`


const NameDiv = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    align-items: space-between;
  }
`;

const PlayerDiv = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Counter = styled.div`
  font-size: 1.8rem;
  display: flex;
  gap: 0.5rem;
`;
