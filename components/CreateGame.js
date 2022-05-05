import { Button } from "./Button";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";

const initialFormData = {
  gameName: "",
  gamePlayers: "",
};

export function CreateGameForm({ newGame }) {
  const [formInput, setFormInput] = useState(initialFormData);

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          labelText="Create new game"
          id="gameName"
          name="gameName"
          placeholder="name of game goes here"
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
        <Button description="Create game score" />
      </form>
    </>
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
