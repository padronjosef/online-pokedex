import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { FemaleSprite, Stats, Types } from '../atoms';

export function ListItem() {
  const { showColors, pokemons, showShiny, showGenders, showFront, effects } = useContext(contextApi);
  const { handleCardData, formatHeight, formatWeight } = effects

  return (
    <ul className='pokelist'>
      {pokemons.map(pokemon => {

        const {
          sprites: {
            front_default, back_default,
            front_shiny, back_shiny,
            front_female, back_female,
            front_shiny_female, back_shiny_female,
            other: {
              dream_world,
              home,
            }
          },
          id, name, height, weight, types, stats
        } = pokemon

        const artwork = pokemon.sprites.other["official-artwork"].front_default

        const tryAll = front_default
          || front_shiny
          || dream_world.front_default
          || home.front_default
          || artwork
          || require("/src/helpers/pokeball/pokeball.png")

        const sprites = () => {
          // male sprites
          if (!showGenders || !front_female) {
            if (showShiny) return showFront ? front_shiny : back_shiny
            return showFront ? front_default : back_default
          }

          // female sprites
          if (showShiny) {
            return showFront ? front_shiny_female : back_shiny_female
          }
          return (showFront ? front_female : back_female)
        }

        const typeColor = showColors ? types[0].type.name + " active-colors" : ''

        return (
          <li className={`pokeitem grid-rows highlight ${typeColor}`} key={id} >
            <figure className="sprites__figure clickable" onClick={() => handleCardData(pokemon)}>
              <img className='sprites__img' src={sprites() || tryAll} alt={name} />
              <FemaleSprite sprite={front_female} />
            </figure>

            <p className='clickable' onClick={() => handleCardData(pokemon)}>
              {id}
            </p>
            <p className='clickable' onClick={() => handleCardData(pokemon)}>
              {name.split("-").join(" ")}
            </p>
            <p>{formatHeight(height)}</p>
            <p>{formatWeight(weight)}</p>
            <Types types={types} typeColor={typeColor} />
            <Stats stats={stats} />
          </li>
        )
      })}
    </ul>
  );
}
