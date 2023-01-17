import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, setPokemon, inputText}) {

  const filteredPokemon = pokemon.filter(item => item.name.includes(inputText));

  const renderPokemon = filteredPokemon.map(pokemon => (
      <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} imgs={pokemon.sprites}/>
  ));

  return (
    <>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {renderPokemon}
      </Card.Group>
    </>
  );
}

export default PokemonCollection;
