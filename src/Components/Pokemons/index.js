import React, { useState } from "react";
import CalculateWinner from "../CalculateWinner";
import PokemonInput from "../PokemonInputField";

const PokemonVote = () => {
  const [bulbasaurName, setBulbasaurName] = useState('Bulbasaur');
  const [charmanderName, setCharmanderName] = useState('Charmander');
  const [squirtleName, setSquirtleName] = useState('Squirtle');

  const [bulbasaurVote, setBulbasaurVote] = useState(0);
  const [charmanderVote, setCharmanderVote] = useState(0);
  const [squirtleVote, setSquirtleVote] = useState(0);

  const voteBulbasaur = () => {
    setBulbasaurVote(bulbasaurVote + 1);
  };

  const voteCharmander = () => {
    setCharmanderVote(charmanderVote + 1);
  };

  const voteSquirtle = () => {
    setSquirtleVote(squirtleVote + 1);
  };

  const handleBulbasaurNameChange = (name) => {
    setBulbasaurName(name);
  };

  const handleCharmanderNameChange = (name) => {
    setCharmanderName(name);
  };

  const handleSquirtleNameChange = (name) => {
    setSquirtleName(name);
  };

  return (
    <div>
      <CalculateWinner
        bulbasaurVote={bulbasaurVote}
        charmanderVote={charmanderVote}
        squirtleVote={squirtleVote}
      />
      <div>
        <div>
          <h3>{bulbasaurName}</h3>
          <PokemonInput onNameChange={handleBulbasaurNameChange} />
          <img src="" alt=""/>
          <button onClick={voteBulbasaur}>Vote {bulbasaurName}</button>
          <p data-testid='paragraph'>{bulbasaurVote} votes</p>
        </div>

        <div>
          <h3>{charmanderName}</h3>
          <PokemonInput onNameChange={handleCharmanderNameChange} />
          <img src="" alt=""/>
          <button onClick={voteCharmander}>Vote {charmanderName}</button>
          <p data-testid='paragraph'>{charmanderVote} votes</p>
        </div>

        <div>
          <h3>{squirtleName}</h3>
          <PokemonInput onNameChange={handleSquirtleNameChange} />
          <img src="" alt=""/>
          <button onClick={voteSquirtle}>Vote {squirtleName}</button>
          <p data-testid='paragraph'>{squirtleVote} votes</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonVote;
