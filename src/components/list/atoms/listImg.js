import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'

export function ListImg({ sprites }) {
  const { options: { op_shiny, op_rotate, op_gender } } = useContext(contextApi)

  const {
    official, dream_world, home,
    front_default, back_default,
    front_shiny, back_shiny,
    front_female, back_female,
    front_shiny_female, back_shiny_female,
  } = sprites

  const tryAll = front_default
    || official.front_default
    || front_shiny
    || dream_world.front_default
    || home.front_default
    || require("/src/helpers/pokeball/pokeball.png")

  const getSprite = () => {
    // return official.front_default
    // female sprites
    if (op_gender && front_female) {
      if (op_shiny) return op_rotate ? back_shiny_female : front_shiny_female
      return (op_rotate ? back_female : front_female)
    }

    // male sprites
    if (op_shiny) return op_rotate ? back_shiny : front_shiny
    return op_rotate ? back_default : front_default
  }

  return (
    <img
      className='sprites__img'
      src={getSprite() || tryAll}
    />
  )
}
