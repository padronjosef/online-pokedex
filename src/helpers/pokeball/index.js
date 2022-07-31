import React from 'react'
import pokeball from './pokeball.png'
import './style.sass'

export function Pokeball({ width = "100%", onClick, className }) {
  return (
    <img
      className={`header__pokeball ${className}`}
      src={pokeball}
      alt='pokeball icon'
      style={{ width: width }}
      onClick={onClick}
    />
  )
}
