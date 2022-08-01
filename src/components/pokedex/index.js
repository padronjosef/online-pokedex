import React, { useEffect, useState, useContext } from 'react'
import { contextApi } from '/src/useContext'
import { Filters, Main, Types } from './objects'
import { BurgerBtn } from '/src/helpers';
import './style.sass'

export function Pokedex() {
  const { effects: { fetchPokemons } } = useContext(contextApi)

  useEffect(() => { fetchPokemons() }, [])

  return (
    <div className='pokedex'>
      <Types />
      <Main />
      <Filters />
      <BurgerBtn />
    </div>
  )
}
