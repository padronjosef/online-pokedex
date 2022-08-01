import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { Pokeball, BurgerBtn } from '/src/helpers'
import { Searcher } from './searcher'

export function Header() {
  const { effects: { closeCard } } = useContext(contextApi)
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Pokeball width={"2.5rem"} onClick={closeCard} />
        <h1 className='header__name' onClick={closeCard} >Online Pokedex</h1>
      </div>
      <Searcher />
    </header>
  )
}
