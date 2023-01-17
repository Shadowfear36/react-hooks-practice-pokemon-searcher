import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const URL = "http://localhost:3001/pokemon";

  //Pokemon list state
  const [pokemon, setPokemon] = useState([]);
  //search input state
  const [inputText, setInputText] = useState("");

  //pull from api only once
  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(obj => setPokemon(obj))
    .catch(err => console.log(err))
  },[]);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon}/>
      <br />
      <Search inputText={inputText} setInputText={setInputText}/>
      <br />
      <PokemonCollection pokemon={pokemon} inputText={inputText}/>
    </Container>
  );
}

export default PokemonPage;
