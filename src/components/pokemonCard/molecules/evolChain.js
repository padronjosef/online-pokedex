import React, { Fragment, useContext } from 'react'
import { contextApi } from '/src/useContext'

export function EvolChain() {
    const { cardData: { evolution_chain }, firstFetch } = useContext(contextApi)

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

    return (
        pokemonMatches.map(({ name, sprites: {front_default} }) => (
            <figure key={name}>
                <img src={front_default} alt={name}/>
            </figure>
        ))
    )
}
