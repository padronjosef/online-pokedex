import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { List, PokemonCard } from '/src/components'
import { Header } from '../molecules'
import { LoadingBar } from '../atoms'

export function Main() {
  const { cardData } = useContext(contextApi)

  return (
    <section className='pokedex__info'>
      <Header />
      <LoadingBar />
      {cardData
        ? <PokemonCard />
        : <List />
      }
    </section>
  )
}
