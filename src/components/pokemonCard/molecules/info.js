import React from 'react';
import { fullHeight, fullWeight } from '/src/helpers/formatData';
import { Types } from '../atoms/types';

export const Info = ({ info }) => {
  const { id, height, weight, abilities, types } = info

  return (
    <div className='pokemonCard__info' >
      <div className='pokemonCard__keys'>
        <p>id</p>
        <p>height</p>
        <p>weight</p>
        <p>abilities</p>
        <p>types</p>
      </div>
      <div className='pokemonCard__values'>
        <p>#{id}</p>
        <p>{fullHeight(height)}</p>
        <p>{fullWeight(weight)}</p>
        <div className='abilities'>
          {
            abilities.map(({ ability }) =>
              <span className='highlight abilities__item' key={ability.name} >
                {ability.name.replace("-", " ")}
              </span>
            )
          }
        </div>
        <Types types={types} />
      </div>
    </div >
  );
};
