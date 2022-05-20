import React, { useContext, useEffect } from 'react';
import { contextApi } from '/src/useContext';

export const CardImg = ({ index = 0 }) => {
  const { spritesLength, cardData, effects: { setSpritesLength } } = useContext(contextApi);

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

  useEffect(() => {
    setSpritesLength(carrousel.length)
  }, [spritesLength])

  return (
    <img className='slider__img' src={carrousel[index]} />
  );
};
