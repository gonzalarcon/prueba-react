import React from "react";
import PokemonList from "./components/MiApi.jsx"




function App() {

  return (
    <div className="App">
      <div className="header">
       <h1>Pokemones de Kanto</h1>
      </div>
      <div className="main">
       <PokemonList/>
      </div>
      <div className="footer">
        <footer>Pokemones obtenidos a través de PokeApi. Visita la web <a href="https://pokeapi.co/">aquí</a>.</footer>
      </div>

    </div>
  );
}

export default App;
