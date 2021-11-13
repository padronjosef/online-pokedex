import React from 'react';
import Scrollspy from 'react-scrollspy';
import DB from '../../../DB';

const Header = () => (
  <Scrollspy className='menu' id='menu' items={DB.header.sections} currentClassName='menu__item--active' offset={-100}>
    {DB.header.sections.map((section) => (
      section && <li key={section} className='menu__item'><a href={`#${section}`} className='menu__link capitalize'>{section}</a></li>
    ))}
  </Scrollspy>
);

export default Header;
