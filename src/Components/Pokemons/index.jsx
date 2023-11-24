import React, { useState } from "react";
import CalculateWinner from "../CalculateWinner";
<<<<<<< HEAD

const PokemonVote = ({ name }) => {
  console.log("pokemonvote name:", name)
=======
import PokemonInput from "../PokemonInputField";

const PokemonVote = () => {
  const [bulbasaurName, setBulbasaurName] = useState('Bulbasaur');
  const [charmanderName, setCharmanderName] = useState('Charmander');
  const [squirtleName, setSquirtleName] = useState('Squirtle');

>>>>>>> feature/pokemonName-input-field
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

<<<<<<< HEAD

  return (
    <div>
      {name && <p data-testid="user-input-display">Welcome {name}!</p>}
=======
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
>>>>>>> feature/pokemonName-input-field
      <CalculateWinner
        bulbasaurVote={bulbasaurVote}
        charmanderVote={charmanderVote}
        squirtleVote={squirtleVote}
      />
      <div>
        <div>
<<<<<<< HEAD
          <h3>Bulbasaur</h3>
          {/* Add your Bulbasaur UI elements here */}
          <button onClick={voteBulbasaur}>Vote Bulbasaur</button>
          <p>{bulbasaurVote} votes</p>
        </div>

        <div>
          <h3>Charmander</h3>
          {/* Add your Charmander UI elements here */}
          <button onClick={voteCharmander}>Vote Charmander</button>
          <p>{charmanderVote} votes</p>
        </div>

        <div>
          <h3>Squirtle</h3>
          {/* Add your Squirtle UI elements here */}
          <button onClick={voteSquirtle}>Vote Squirtle</button>
          <p>{squirtleVote} votes</p>
=======
          <h3>{bulbasaurName}</h3>
          <PokemonInput data-testid="bulbasaur-input" onNameChange={handleBulbasaurNameChange} />
          <img src="" alt=""/>
          <button onClick={voteBulbasaur}>Vote {bulbasaurName}</button>
          <p data-testid='paragraph'>{bulbasaurVote} votes</p>
        </div>

        <div>
          <h3>{charmanderName}</h3>
          <PokemonInput data-testid="charmander-input" onNameChange={handleCharmanderNameChange} />
          <img src="" alt=""/>
          <button onClick={voteCharmander}>Vote {charmanderName}</button>
          <p data-testid='paragraph'>{charmanderVote} votes</p>
        </div>

        <div>
          <h3>{squirtleName}</h3>
          <PokemonInput data-testid="squirtle-input" onNameChange={handleSquirtleNameChange} />
          <img src="" alt=""/>
          <button onClick={voteSquirtle}>Vote {squirtleName}</button>
          <p data-testid='paragraph'>{squirtleVote} votes</p>
>>>>>>> feature/pokemonName-input-field
        </div>
      </div>
    </div>
  );
};

export default PokemonVote;
