import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { getTypesToRender } from '/src/useContext/fillterEffects'
import { TypesIcon } from '../atoms'

export function Types() {
  const { firstFetch, types, filters, effects: { handleFilters } } = useContext(contextApi)

  const handleClick = name => () =>  handleFilters("type", name)

  const typesToRender = getTypesToRender(firstFetch)
  const typesToDisable = getTypesToRender(types)

  const diosmioFuncionaPls = typesToDisable.filter(item => !typesToRender.includes(item))

  return ( 
    <section className='pokedex__info highlight'>
      {
        typesToRender.map( name => (
          <div
            className={`types ${name === filters.type ? 'types--active highlight' : ''}`}
            onClick={handleClick(name)}
            key={name}
          >
            <TypesIcon type={name} />
            <p className="types__text">{name}</p>
          </div>
        )) 
      }
      {
        diosmioFuncionaPls.map( name => (
          <div
            className={`types disabled`}
            key={name}
          >
            <TypesIcon type={name} />
            <p className="types__text">{name}</p>
          </div>
        ))
      }
    </section>
  )
}
