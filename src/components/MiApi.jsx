import React, { useState, useEffect } from 'react';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(data => setPokemon(data.results))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemon.filter(p => {
        return (
          p.name.toLowerCase().includes(filter.toLowerCase()) ||
          p.url.includes(filter.toLowerCase())
        );
      })
      .sort((a, b) => {
        if (sortOrder === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      })
  );
}, [filter, pokemon, sortOrder]);

const buttonSortOrder = () => {
  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
};
  return (
    <div className="pokemon-list">
      <input className='Búsqueda'
        type="text"
        placeholder="Filtra por nombre!"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <button onClick={buttonSortOrder}>
        {sortOrder === 'asc' ? 'Ordenar de la Z a la A' : 'Ordenar de la A a la Z'}
      </button>
      <div className="pokemon-cards">
        {filteredPokemon.map(p => (
          <div className="pokemon-card" key={p.name}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.url.split('/')[6]}.png`}
              alt={p.name}
            />
            <h2>{p.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;