import React, { useContext, useEffect, useState } from 'react'
import { NextPrev, BackgroundId, CardImg } from '../atoms'
import { contextApi } from '/src/useContext'
import { Pokeball } from '/src/helpers'

export const Slider = () => {
  const { cardData, spritesLength } = useContext(contextApi)

  const [index, setIndex] = useState(0)
  const handleNext = () => index + 1 === spritesLength ? setIndex(0) : setIndex(index + 1)
  const handlePrev = () => index ? setIndex(index - 1) : setIndex(spritesLength - 1)

  useEffect(() => { setIndex(0) }, [cardData])

  const {
    official, dream_world, home,
    front_default, back_default, front_shiny, back_shiny,
    front_female, back_female, front_shiny_female, back_shiny_female,
  } = cardData.sprites

  const carrousel = [
    official.front_default,
    front_default, back_default,
    front_shiny, back_shiny,
    front_female, back_female,
    front_shiny_female, back_shiny_female,
    dream_world.front_default,
    dream_world.front_female,
    home.front_default,
    home.front_female,
    home.front_shiny,
    home.front_shiny_female,
  ].filter(a => a)

  if (!carrousel.length) return <Pokeball className="slider__img" />

  return (
    <div className='slider'>
      <NextPrev icon="<" onClick={handlePrev} />

      <BackgroundId />

      <CardImg carrousel={carrousel} index={index} />

      <NextPrev icon=">" onClick={handleNext} />

      <span className='slider__counter highlight'>
        {index + 1 + " / " + spritesLength}
      </span>
    </div >
  )
}
