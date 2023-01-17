import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemon, setPokemon}) {

  const [nameInput, setNameInput] = useState("");
  const [hpInput, setHPInput] = useState("");
  const [frontImg, setFrontImg] = useState("");
  const [backImg, setBackImg] = useState("");
  const [newPokemon, setNewPokemon] = useState({});
  //Handlers
  const handleName = (e) => {
    setNameInput(e.target.value);
  }

  const handleHP = (e) => {
    setHPInput(e.target.value);
  }

  const handleFront = (e) => {
    setFrontImg(e.target.value);
  }

  const handleBack = (e) => {
    setBackImg(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewPokemon({
      "name": nameInput,
      "hp": hpInput,
      "sprites": {
        "front": frontImg,
        "back": backImg
      }
    })
    fetch("http://localhost:3001/pokemon",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": nameInput,
          "hp": hpInput,
          "sprites": {
            "front": frontImg,
            "back": backImg
          }
        })
    })
    .then(res => console.log(res))
    .then(setPokemon([...pokemon, newPokemon]))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid onChange={handleName} label="Name" placeholder="Name" name="name" value={nameInput}/>
          <Form.Input fluid onChange={handleHP} label="hp" placeholder="hp" name="hp" value={hpInput}/>
          <Form.Input
            fluid
            onChange={handleFront}
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImg}
          />
          <Form.Input
            fluid
            onChange={handleBack}
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImg}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
