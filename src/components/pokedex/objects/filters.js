import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'

export function Filters() {
  const { loading, FILTERS } = useContext(contextApi)

  return (
    <section className='pokedex__info highlight'>
      <div className='filters__header highlight'>
        Filter by
      </div>
      {FILTERS.map(filter => (
        <div className='filters' key={filter}>
          <p className='filters__text'>{filter}</p>
          <input
            className='filters__input highlight'
            placeholder={filter}
            type="number"
            disabled={!loading}
          />
        </div>
      ))}
      <div className='filters__wrapper'>
        <button disabled={!loading} className='filters__button highlight'>
          Apply Filters
        </button>
      </div>
    </section>
  )
}
