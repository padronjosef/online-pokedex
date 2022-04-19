import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';

export function ListImg({ sprites }) {
  const { options: { op_shiny, op_rotate, op_gender } } = useContext(contextApi);

  const {
    front_default, back_default,
    front_shiny, back_shiny,
    front_female, back_female,
    front_shiny_female, back_shiny_female,
    other: { dream_world, home, }
  } = sprites

  const artwork = sprites.other["official-artwork"].front_default

  const tryAll = front_default
    || front_shiny
    || dream_world.front_default
    || home.front_default
    || artwork
    || require("/src/helpers/pokeball/pokeball.png")

  const getSprite = () => {
    // male sprites
    if (!op_gender || !front_female) {
      if (op_shiny) return op_rotate ? back_shiny : front_shiny
      return op_rotate ? back_default : front_default
    }

    // female sprites
    if (op_shiny) {
      return op_rotate ? back_shiny_female : front_shiny_female
    }
    return (op_rotate ? back_female : front_female)
  }

  return (
    <img
      className='sprites__img'
      src={getSprite() || tryAll}
    />
  );
}
