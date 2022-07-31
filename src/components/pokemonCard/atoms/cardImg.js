import React, { useContext, useEffect } from 'react'
import { contextApi } from '/src/useContext'

export const CardImg = ({ carrousel = [], index = 0 }) => {
  const { spritesLength, cardData, effects: { setSpritesLength } } = useContext(contextApi)

  useEffect(() => {
    setSpritesLength(carrousel.length)
  }, [spritesLength, cardData])

  return (
    <img className='slider__img' src={carrousel[index]} />
  )
}
