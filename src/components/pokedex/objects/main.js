import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { List, PokemonCard } from '/src/components';
import { Header, Searcher, NotFound } from '../molecules';

export function Main() {
  const { notFound, modalData } = useContext(contextApi);

  return (
    <section className='pokedex__info'>
      <Header />
      <Searcher />
      {
        modalData
          ? <PokemonCard />
          : notFound
            ? <NotFound />
            : <List />
      }
    </section>
  );
};
