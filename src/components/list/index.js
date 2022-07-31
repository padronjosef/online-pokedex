import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { Options, Header, ListItem, Pagination } from './molecules'
import { NotFound } from '/src/components/pokedex/molecules'
import { Spinner } from '/src/helpers'
import './style.sass'

export function List() {
  const { pokemons, notFound } = useContext(contextApi)

  if (!pokemons) return <Spinner />
  if (notFound) return <NotFound />

  return (
    <ul className='pokelist-wrapper'>
      <Options />
      <Header />
      <ListItem />
      <Pagination />
    </ul>
  )
}
