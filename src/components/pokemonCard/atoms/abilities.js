import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { normalize } from '/src/helpers/formatData'

export const Abilities = () => {
  const { cardData: { abilities } } = useContext(contextApi)

  return (
    <div className='abilities'>
      {abilities.map(({ ability }) =>
        <span className='highlight abilities__item' key={ability.name} >
          {normalize(ability.name)}
        </span>
      )}
    </div>
  )
}
