import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { List, PokemonCard } from '/src/components'
import { Header } from '../molecules'

export function Main() {
  const { cardData } = useContext(contextApi)

  return (
    <section className='pokedex__info'>
      <Header />
      {
        cardData
          ? <PokemonCard />
          : <List />
      }
    </section>
  )
}
