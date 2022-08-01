import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { Spinner } from '/src/helpers';

export function EvolChain() {
  const { loading, firstFetch, cardData: { types, evolution_chain }, effects: { handleCardData } } = useContext(contextApi)

  if (!evolution_chain) return

  function dataFormater(pokemon, evolList = []) {
    evolList.push(pokemon.species?.name)

    if (pokemon.evolves_to?.length) {
      return pokemon.evolves_to.length > 1
        ? [...evolList, ...pokemon.evolves_to.map(item => item.species?.name)]
        : dataFormater(pokemon.evolves_to[0], evolList)
    }

    return evolList
  }

  const listOfNames = dataFormater(evolution_chain)

  const pokemonMatches = firstFetch.filter(item => listOfNames.includes(item.name))

  const handleClick = item => () => handleCardData(item)


  if (!loading) return <Spinner />
  if (pokemonMatches.length <= 1) return

  return (
    <div className='evolchain'>
      <h3 className='evolchain__title'>
        Evolution chain
      </h3>
      <div className='evolchain__wrapper'>
        {pokemonMatches.map(pokemon => {
          const { name, sprites: { front_default } } = pokemon

          return (
            <figure key={name} className={`evolchain__card highlight ${types[0]}`} onClick={handleClick(pokemon)}>
              <img className='w-100' src={front_default} alt={name} />
              <figcaption className='evolchain__name'>{name}</figcaption>
            </figure>
          )
        })}
      </div>
    </div>
  )
}
