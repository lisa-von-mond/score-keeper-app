import styled from "styled-components";

export function MyButton({ text, color, click }) {
  return (
    <FancyButton onClick={click} color={color}>
      {text}
    </FancyButton>
  );
}

const FancyButton = styled.button`
  height: 4rem;
  min-width: 4rem;
  margin: 1rem;

  width: auto;
  padding: 1rem;
  background-color: #4c4a8f;
  box-shadow: 5px -5px 0 #fbc8d4;
  border: none;
  color: #fbc8d4;
  text-transform: uppercase;
  border-radius: 2rem;
`;
