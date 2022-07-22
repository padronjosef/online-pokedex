import React, { useContext, useEffect, useState } from 'react'
import { NextPrev, BackgroundId, CardImg } from '../atoms'
import { contextApi } from '/src/useContext'

export const Slider = () => {
  const { cardData, spritesLength } = useContext(contextApi)

  const [index, setIndex] = useState(0)
  const handleNext = () => index + 1 === spritesLength ? setIndex(0) : setIndex(index + 1)
  const handlePrev = () => index ? setIndex(index - 1) : setIndex(spritesLength - 1)

  useEffect(() => { setIndex(0) }, [cardData])

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
