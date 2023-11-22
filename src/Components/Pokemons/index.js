import React, { useState } from "react";
import CalculateWinner from "../CalculateWinner";

const PokemonVote = () => {
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
      <CalculateWinner
        bulbasaurVote={bulbasaurVote}
        charmanderVote={charmanderVote}
        squirtleVote={squirtleVote}
      />
      <div>
        <div>
          <h3>Bulbasaur</h3>
          <img src="" alt=""/>
          <button onClick={voteBulbasaur}>Vote Bulbasaur</button>
          <p data-testid='paragraph' >{bulbasaurVote} votes</p>
        </div>

        <div>
          <h3>Charmander</h3>
          <img src="" alt=""/>
          <button onClick={voteCharmander}>Vote Charmander</button>
          <p data-testid='paragraph'>{charmanderVote} votes</p>
        </div>

        <div>
          <h3>Squirtle</h3>
          <img src="" alt=""/>
          <button onClick={voteSquirtle}>Vote Squirtle</button>
          <p data-testid='paragraph'>{squirtleVote} votes</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonVote;
