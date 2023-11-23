import React, { useState } from "react";
import "./App.css";
import PokemonVote from "./Components/Pokemons";
import UserInput from "./Components/UserInput";
import Header from "./Components/Header";

function App({title, subTitle}) {
  const [name, setName] = useState("");

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
  };
  
  console.log("app.js name: ", name)
  
  return (
    <div className="App">
      <Header title={title} subTitle={subTitle} />
      <UserInput onSubmit={handleNameSubmit} />
      <PokemonVote name={name} />
    </div>
  );
}

export default App;
