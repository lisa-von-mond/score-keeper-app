import styled from "styled-components";
import { Players } from "./Players";

export function ActiveGames({ myGames, increase }) {
  return (
    <div>
      {myGames.map((game) => (
        <OneGame>
          {game.name}
          <Players
            gameId={game.gameId}
            players={game.players}
            increase={increase}
          />
        </OneGame>
      ))}
    </div>
  );
}

const OneGame = styled.div``;
