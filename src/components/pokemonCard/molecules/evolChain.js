import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'

export function EvolChain() {
    const { firstFetch, cardData: { evolution_chain }, effects: { handleCardData } } = useContext(contextApi)

    function dataFormater(pokemon, evolList = []) {
        evolList.push(pokemon.species?.name)

        if(pokemon.evolves_to?.length) {
            return pokemon.evolves_to.length > 1 
                ? [...evolList, ...pokemon.evolves_to.map(item => item.species?.name)]
                : dataFormater(pokemon.evolves_to[0], evolList)  
        }  

        return evolList
    }

    const listOfNames = dataFormater(evolution_chain)

    const pokemonMatches = firstFetch.filter(item => listOfNames.includes(item.name))

    const handleClick = item => () => handleCardData(item)

    return (
        <div className='evolchain'>
            <h3 className='evolchain__title'>Evolution chain</h3>
            <div className='evolchain__wrapper'>
                {pokemonMatches.map( pokemon => {
                    const { name, sprites: { front_default }} = pokemon

                    return (
                        <figure key={name} className='evolchain__card highlight' onClick={handleClick(pokemon)}>
                            <img className='w-100' src={front_default} alt={name}/>
                            <figcaption className='evolchain__name'>{name}</figcaption>
                        </figure>
                    )
                })}
            </div>
        </div>
    )
}
