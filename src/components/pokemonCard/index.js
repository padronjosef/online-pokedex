import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { Spinner } from "/src/helpers"
import { Header, Slider, Info, Stats, EvolChain } from './molecules'
import './style.sass'

export const PokemonCard = () => {
  const { cardData } = useContext(contextApi)
  
  if (!cardData) return <Spinner />

  return (
    <div className='pokemonCard' >
      <Header />
      <p className='pokemonCard__description'>{cardData.description}</p>
      <div className='pokemonCard__main'>
        <Info />
        <Slider />
        <Stats />
      </div>
      <EvolChain />
    </div >
  )
}
