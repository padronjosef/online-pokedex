import React from 'react';
import DB from '../../../DB';
import { Animation } from '../../helpers';

function Design () {
  const { designs, behance, ViewMore } = DB.portfolio;

  return (
    <Animation className='center'>
      <div className='projects'>
        {designs.slice(0, 9).map(({ img, name }) => (
          <figure className='projects__figure' key={name}>
            <img className='projects__img' src={img} alt={name} />
          </figure>
        ))}
      </div>
      <a className='btn' target="_blank" href={behance}>
        {ViewMore}
      </a>
    </Animation>
  );
};

export default Design;
