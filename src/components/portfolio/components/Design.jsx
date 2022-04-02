import React from 'react';
import DB from '../../../DB';
import { Animation } from '../../helpers/Animation';

function Design () {
  const { designs, behance, ViewMore } = DB.portfolio;
  return (
    <>
      <Animation className='projects'>
        {designs.slice(0, 9).map(({ img, name }) => (
          <figure className='projects__figure' key={name}>
            <img className='projects__img' src={img} alt={name} />
          </figure>
        ))}
      </Animation>
      <Animation className='btn' href={behance}>
        {ViewMore}
      </Animation>
    </>
  );
};

export default Design;
