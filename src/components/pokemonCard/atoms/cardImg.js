import React, { useContext, useEffect } from 'react';
import { contextApi } from '/src/useContext';

export const CardImg = ({ index = 0 }) => {
  const { spritesLength, cardData, effects: { setSpritesLength } } = useContext(contextApi);

  const {
    front_default, back_default, front_shiny, back_shiny,
    front_female, back_female, front_shiny_female, back_shiny_female,
    other: { dream_world, home }
  } = cardData.sprites

  const oficial = cardData.sprites.other["official-artwork"].front_default;

  const carrousel = [
    oficial,
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
