import React from 'react';

export function ListItem ({ item }) {
  return (
    <li key={item} className='menu__item'>
      <a href={`#${item}`} className='menu__link capitalize'>
        {item}
      </a>
    </li>
  )
}
