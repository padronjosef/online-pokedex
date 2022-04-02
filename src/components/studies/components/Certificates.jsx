import React from 'react';
import { Animation } from '../../helpers';

export function Certificates ({ certificate }) {
  return (
    <Animation className='courses'>
      {certificate.map(({ link, img, name, id }) => (
        <a key={id} className='certificate' target='__blank' href={link}>
          <img className='certificate__img' src={img} alt={name} />
        </a>
      ))}
    </Animation>
  );
};
