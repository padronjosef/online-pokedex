import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Options, Header, ListItem, Pagination } from './molecules/index'
import { Spinner } from '/src/helpers';
import './style.sass';

export function List() {
  const { pokemons, NotFound } = useContext(contextApi);

  if (!pokemons) return <Spinner />
  if (NotFound) return <NotFound />

  return (
    <ul className='pokelist'>
      <Options />
      <Header />
      <ListItem />
      <Pagination />
    </ul>
  );
}
