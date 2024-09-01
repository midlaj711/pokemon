import React from 'react';

const SearchBar = ({ onChange }) => {
  return (

    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={onChange}
      style={{ padding: '10px', width: '100%', marginBottom: '20px' }}/>
  );
};

export default SearchBar;
