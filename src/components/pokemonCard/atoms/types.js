import React from 'react';
import { getAsset } from '/src/helpers';

export function Types({ types = [] }) {
  return (
    <div className='pokemonCard__types'>
      {types.map(({ type: { name } }) => (
        <div className={`highlight pokemonCard__type ${name}`} key={name}>
          <p>{name}</p>
          <img className='pokemonCard__img' src={getAsset("types", name)} alt={name} />
        </div>
      ))}
    </div>
  );
}
