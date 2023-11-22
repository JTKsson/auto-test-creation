import React, { useState } from "react";
import "./App.css";
import PokemonVote from "./Components/Pokemons";
import UserInput from "./Components/UserInput";

function App() {
  const [name, setName] = useState("");

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
  };
  
  console.log("app.js name: ", name)
  
  return (
    <div className="App">
      <UserInput onSubmit={handleNameSubmit} />
      <PokemonVote name={name} />
    </div>
  );
}

export default App;
