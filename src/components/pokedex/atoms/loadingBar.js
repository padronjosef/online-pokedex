import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { actualPage } from '/src/helpers'

export function LoadingBar() {
  const { loading, totalOfPokemon, numberOfPokemons } = useContext(contextApi)

  const loaded = actualPage(totalOfPokemon)
  const total = Math.ceil(numberOfPokemons / 10)

  const progress = 100 - ((total - loaded) / total * 100)

  const borderRadiusFix = progress < 5 ? { borderRadius: "50%" } : ''

  if (loading) return

  return (
    <div className='loadingBar'>
      <div className='loadingBar__text'>{parseInt(progress)}%</div>
      <div className='loadingBar__progress' style={{ width: `${progress}% ${borderRadiusFix}` }} />
    </div>
  )
}
