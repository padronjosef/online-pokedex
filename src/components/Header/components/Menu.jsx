import React from 'react';
import { ListItem } from './ListItem'
import Scrollspy from 'react-scrollspy';
import DB from '../../../DB';

const Header = () => {
  const sections = DB.header.sections;

  return (
    <Scrollspy className='menu' id='menu' items={sections} currentClassName='menu__item--active' offset={-100}>
      {sections.map(item => item && <ListItem item={item}/> )}
    </Scrollspy>
  )
}

export default Header;
