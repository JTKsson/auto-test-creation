import "./App.css";
import PokemonVote from "./Components/Pokemons";
import UserInput from "./Components/UserInput";

function App() {
  return (
    <div className="App">
      <UserInput />
      <PokemonVote />
    </div>
  );
}

export default App;
