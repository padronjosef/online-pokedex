import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { TypesIcon } from '../atoms'

export function Types() {
  const { types, filters, effects: { handleFilters } } = useContext(contextApi)

  const handleClick = name => () =>  handleFilters("type", name)

  return (
    <section className='pokedex__info highlight'>
      {types.map(({ name }) => (
        <div
          className={`types ${name === filters.type ? 'types--active highlight' : ''}`}
          onClick={handleClick(name)}
          key={name}
        >
          <TypesIcon type={name} />
          <p className="types__text">{name}</p>
        </div>
      ))}
    </section>
  )
}
