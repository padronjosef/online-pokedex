import React from 'react';
import DB from '../../../DB';

export function SocialNetworks () {
  const { social } = DB.footer;

  return (
    <ul className='social'>
      {social.map(({ link, img, name }) => (
        <li className='social__item' key={name}>
          <a className='social__link' rel='noreferrer' href={link} target='_blank'>
            <img className='social__img' src={img} alt={name} />
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};
