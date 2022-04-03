import React from 'react';
import Scrollspy from 'react-scrollspy';
import DB from '../../../DB';

export function Menu () {
  const sections = DB.header.sections;

  return (
    <Scrollspy className='menu' id='menu' items={sections} currentClassName='menu__item--active' offset={-100}>
      {sections.map(item => item && (
        <li key={item} className='menu__item'>
          <a href={`#${item}`} className='menu__link capitalize'>
            {item}
          </a>
        </li>
      ))}
    </Scrollspy>
  )
}
