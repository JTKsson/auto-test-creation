import React, { useState } from "react";
import CalculateWinner from "../CalculateWinner";

const PokemonVote = ({ name }) => {
  console.log("pokemonvote name:", name)
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


  return (
    <div>
      {name && <p>Welcome {name}!</p>}
      <CalculateWinner
        bulbasaurVote={bulbasaurVote}
        charmanderVote={charmanderVote}
        squirtleVote={squirtleVote}
      />
      <div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default PokemonVote;
