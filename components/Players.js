import styled from "styled-components";
import { Button } from "./Button";

export function Players({ gameId, players, increase }) {
  return (
    <div>
      {players.map((player) => (
        <OnePlayer id={player.id}>
          {player.name}
          {player.score}
          <Button onClick={() => increase(id, gameId)} description="+" />
          <Button onClick={() => decrease(id, gameId)} description="-" />
        </OnePlayer>
      ))}
    </div>
  );
}

const OnePlayer = styled.div``;
