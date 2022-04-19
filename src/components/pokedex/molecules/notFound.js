import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Pokeball } from '/src/helpers'

export function NotFound() {
  const { effects: { fetchPokemons } } = useContext(contextApi);
  return (
    <div className='not-found'>
      <div className='not-found__numbers'>
        <span className='not-found__span'>4</span>
        <Pokeball width="90px" />
        <span className='not-found__span'>4</span>
      </div>
      <div className='not-found__message'>
        <p className='not-found__uh-oh'>
          Uh-oh!
        </p>
        <p className='not-found__description'>
          You look lost on your journey!
        </p>
      </div>
      <button
        className='not-found__button'
        onClick={fetchPokemons}
      >
        Go Back Home
      </button>
    </div>
  );
};
