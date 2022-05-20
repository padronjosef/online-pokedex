import React, { useContext, useState } from 'react';
import { contextApi } from '/src/useContext';

export function Searcher() {
  const { inputSearch, effects: { searchPokemons, handleKeyDown, setInputSearch } } = useContext(contextApi);

  return (
    <div className='searcher'>
      <input
        className='searcher__bar highlight'
        type='search'
        placeholder='Search your pokemon!'
        onChange={(e) => setInputSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        value={inputSearch}
      />
      <button
        onClick={searchPokemons}
        className='searcher__btn'
      >
        GO
      </button>
    </div>
  );
};
