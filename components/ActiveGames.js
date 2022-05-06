import styled from "styled-components";
import { MyButton } from "./Button";

export function ActiveGames({ myGames, increase, decrease }) {
  return (
    <div>
      {myGames.map((game) => (
        <OneGame key={game.gameId}>
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
                ></MyButton>
                <p>{element.score}</p>
                <MyButton
                  text="inc"
                  click={() => {
                    increase(element.id, game.gameId);
                  }}
                ></MyButton>
              </Counter>
            </PlayerDiv>
          ))}
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
`;

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
