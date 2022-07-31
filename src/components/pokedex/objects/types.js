import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { getTypesToRender } from '/src/useContext/fillterEffects'
import { TypesIcon } from '../atoms'

export function Types() {
  const { loading, firstFetch, types, filters, effects: { handleFilters } } = useContext(contextApi)

  const handleClick = name => () => handleFilters("type", name)

  const activeTypes = getTypesToRender(firstFetch)

  const checkingTypes = types.map(item => ({
    ...item, disabled: !activeTypes.includes(item.name)
  }))

  const sortedTypes = checkingTypes.sort((a, b) => a.disabled - b.disabled)

  return (
    <section className='pokedex__info highlight'>
      {
        sortedTypes.map(({ name, disabled }) => {
          const isFocused = name === filters.type ? 'types--active highlight' : ''
          const isDisabled = disabled ? 'disabled' : ''

          return (
            <button
              className={`types ${isFocused} ${isDisabled}`}
              onClick={handleClick(name)}
              key={name}
              disabled={!loading || isDisabled}
            >
              <TypesIcon type={name} />
              <p className="types__text">{name}</p>
            </button>
          )
        })
      }
    </section>
  )
}
