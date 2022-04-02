import React from 'react';
import { Animation } from '../../helpers/Animation';
import DB from '../../../DB';

function Uiux () {
  const { uxix } = DB.portfolio;

  return (
    <Animation className='projects'>
      {uxix.slice(0, 5).map(({ link, img, name }) => (
        <a className='projects__figure' href={link} target='__black' key={name}>
          <img className='projects__img' src={img} alt={name} />
        </a>
      ))}
    </Animation>
  );
};

export default Uiux;
