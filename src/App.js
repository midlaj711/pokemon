import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    const fetchData = async () => {
    
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=140');
      const promises = response.data.results.map(async (pokemon) => {
 
        const pokeDetails = await axios.get(pokemon.url);
        return {
          name: pokeDetails.data.name,
          image: pokeDetails.data.sprites.front_default,
        };
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Pokémon Gallery</h1>
      <SearchBar onChange={handleSearch} />
      <div className="card-container">

        {filteredPokemons.map((pokemon, index) => (

          <Card key={index} name={pokemon.name} image={pokemon.image} />
        ))}
      </div>
    </div>
  );
};

export default App;
