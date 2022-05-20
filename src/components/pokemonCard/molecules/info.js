import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { fullHeight, fullWeight } from '/src/helpers/formatData'
import { Types, Abilities } from '../atoms'

export const Info = () => {
  const { cardData } = useContext(contextApi)
  const { id, height, weight } = cardData

  return (
    <div className='pokemonCard__info' >
      <div className='pokemonCard__keys'>
        <p>id</p>
        <p>height</p>
        <p>weight</p>
        <p>abilities</p>
        <p>types</p>
      </div>
      <div className='pokemonCard__values'>
        <p>#{id}</p>
        <p>{fullHeight(height)}</p>
        <p>{fullWeight(weight)}</p>
        <Abilities />
        <Types />
      </div>
    </div >
  )
}
