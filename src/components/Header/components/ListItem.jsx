import React from 'react';

export const ListItem = ({ item }) => (
  <li key={item} className='menu__item'>
    <a href={`#${item}`} className='menu__link capitalize'>
      {item}
    </a>
  </li>
)

