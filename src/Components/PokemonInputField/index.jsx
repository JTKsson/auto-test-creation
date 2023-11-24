import { useState } from "react";

const PokemonInput = ({ onNameChange }) => {
  const [pokemonName, setPokemonName] = useState("");

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleButtonClick = () => {
    onNameChange(pokemonName);
    setPokemonName(""); 
    
  };

  return (
    <div>
      <input type="text" value={pokemonName} onChange={handleInputChange} placeholder="Enter new name" />
      <button onClick={handleButtonClick}>Change Name</button>
    </div>
  );
};

export default PokemonInput;
