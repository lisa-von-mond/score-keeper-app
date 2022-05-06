import styled from "styled-components";
import { MyButton } from "./Button";

export function ActiveGames({ myGames, increase, decrease }) {
  return (
    <div>
      {myGames.map((game) => (
        <OneGame key={game.gameId}>
          {game.nameOfGame}
          {game.players.map((element) => (
            <div key={element.id}>
              <p>{element.name}</p>
              <p>{element.score}</p>
              <MyButton
                text="dec"
                click={() => {
                  decrease(element.id, game.gameId);
                }}
              ></MyButton>
              <MyButton
                text="inc"
                click={() => {
                  increase(element.id, game.gameId);
                }}
              ></MyButton>
            </div>
          ))}
        </OneGame>
      ))}
    </div>
  );
}

const OneGame = styled.div``;
