import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';

export function Searcher() {
  const { inputSearch, effects } = useContext(contextApi);
  // const { getAPokemon, setInputSearch, handleKeyDown } = effects

  return (
    <div className='searcher'>
      <input
        className='searcher__bar highlight'
        type='search'
        placeholder='Search your pokemon!'
        // onChange={(e) => setInputSearch(e.target.value)}
        // onKeyDown={handleKeyDown}
        value={inputSearch}
      />
      <button
        // onClick={getAPokemon}
        className='searcher__btn'
      >
        GO
      </button>
    </div>
  );
};
