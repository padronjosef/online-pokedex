import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { actualPage, totalPages, getLast } from '/src/helpers'

export const Pagination = () => {
  const { loading, totalOfPokemon, filters: { page }, effects: { handleFilters } } = useContext(contextApi)
  const numberOfPages = totalPages(totalOfPokemon)

  if (!loading || numberOfPages <= 1) return

  const buttons = [
    {
      name: 'First',
      logic: () => handleFilters("page", 0),
      disabled: !page
    },
    {
      name: 'Previous',
      logic: () => handleFilters("page", page - 10),
      disabled: !page
    },
    {
      name: actualPage(page) + " / " + numberOfPages,
      className: "counter",
    },
    {
      name: 'Next',
      logic: () => handleFilters("page", page + 10),
      disabled: page >= totalOfPokemon,
    },
    {
      name: 'Last',
      logic: () => handleFilters("page", getLast(totalOfPokemon)),
      disabled: page >= totalOfPokemon,
    },
  ]

  return (
    <nav className='navbar stickers'>
      {buttons.map(({ name, logic, disabled }) => {
        const isDisabled = `navbar__btn highlight ${disabled ? 'disabled' : ''}`
        return (
          <button disabled={disabled} onClick={logic} key={name} className={isDisabled}>
            {name.toLocaleUpperCase()}
          </button>
        )
      })}
    </nav>
  )
}
