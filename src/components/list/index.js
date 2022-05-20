import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Options, Header, ListItem, Pagination } from './molecules/index'
import { Spinner } from '/src/helpers';
import { NotFound } from '/src/components/pokedex/molecules'
import './style.sass';

export function List() {
  const { pokemons, notFound } = useContext(contextApi);

  if (!pokemons) return <Spinner />
  if (notFound) return <NotFound />

  return (
    <ul className='pokelist'>
      <Options />
      <Header />
      <ListItem />
      <Pagination />
    </ul>
  );
}
