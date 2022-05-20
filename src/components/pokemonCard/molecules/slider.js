import React, { useContext, useState } from 'react'
import { NextPrev, BackgroundId, CardImg } from '../atoms'
import { contextApi } from '/src/useContext'

export const Slider = () => {
  const { spritesLength } = useContext(contextApi)

  const [index, setIndex] = useState(0)
  const handleNext = () => index + 1 === spritesLength ? setIndex(0) : setIndex(index + 1)
  const handlePrev = () => index ? setIndex(index - 1) : setIndex(spritesLength - 1)

  return (
    <div className='slider'>
      <NextPrev icon="<" onClick={handlePrev} />

      <BackgroundId />

      <CardImg index={index} />

      <NextPrev icon=">" onClick={handleNext} />

      <span className='slider__counter highlight'>
        {index + 1 + " / " + spritesLength}
      </span>
    </div >
  )
}
