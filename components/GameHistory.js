import styled, {css} from "styled-components";
import { MyButton } from "./Button";

export function History({ myGames }) {
  return (
    <div>
      {myGames.map((game) => (
        <HistoryEntry key={game.gameId} visible={game.isActive}>
          <NameDiv>result of {game.nameOfGame}</NameDiv>
          {game.players.map((element) => (
            <PlayerDiv key={element.id}>
              <p>{element.name}: {element.score}</p>
            </PlayerDiv>
          ))}
          <MyButton text="delete"/>
        </HistoryEntry>
      ))}
    </div>
  );
}

const HistoryEntry = styled.div`
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

  p{margin: 0;
     padding:0;}

  ${props =>
    props.visible === true &&
    css`
   display: none;
    `}

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


