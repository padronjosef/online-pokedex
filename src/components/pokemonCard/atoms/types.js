import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { getAsset } from '/src/helpers';

export function Types() {
  const { cardData: { types } } = useContext(contextApi);

  return (
    <div className='pokemonCard__types'>
      {types.map(name => (
        <div className={`highlight pokemonCard__type ${name}`} key={name}>
          <p>{name}</p>
          <img className='pokemonCard__img' src={getAsset("types", name)} alt={name} />
        </div>
      ))}
    </div>
  );
}
