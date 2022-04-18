import React from 'react';
import { Pokeball } from '/src/helpers';

export function Header() {
  return (
    <header className='header'>
      <Pokeball width={"2.5rem"} />
      <h1 className='header__name'>Online Pokedex</h1>
    </header>
  );
};
