import { MyButton } from "./Button";
import Input from "./Input";
import { useState } from "react";
import styled from "styled-components";

const initialFormData = {
  gameName: "",
  gamePlayers: "",
};

export function CreateGameForm({ newGame }) {
  const [formInput, setFormInput] = useState(initialFormData);

  return (
    <GameForm autoComplete="off" onSubmit={handleSubmit}>
      <Input
        labelText="Create new game"
        id="gameName"
        name="gameName"
        placeholder="name of game"
        type="text"
        value={formInput.gameName}
        onChange={handleChange}
      />

      <Input
        labelText="Insert Players"
        id="gamePlayers"
        name="gamePlayers"
        placeholder="players go here"
        type="text"
        value={formInput.gamePlayers}
        onChange={handleChange}
      />
      <MyButton text="Create game score" />
    </GameForm>
  );

  function handleChange(myevent) {
    const { name, value } = myevent.target;
    setFormInput({ ...formInput, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    newGame({
      gameName: formInput.gameName,
      gamePlayers: formInput.gamePlayers.split(",").map((name) => name.trim()),
    });

    setFormInput(initialFormData);
  }
}

const GameForm = styled.form`
  width: 100%;
  padding: 2rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
  box-shadow: 5px -5px #9795f0;
  border: 3px solid #9795f0;
`;
