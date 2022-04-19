import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { List, PokemonCard } from '/src/components';
import { Header, Searcher } from '../molecules';

export function Main() {
  const { cardData } = useContext(contextApi);

  return (
    <section className='pokedex__info'>
      <Header />
      <Searcher />
      {
        cardData
          ? <PokemonCard />
          : <List />
      }
    </section>
  );
};
