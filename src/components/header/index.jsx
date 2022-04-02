import React from 'react';
import DB from '../../DB';
import { Menu } from './components';
import './style.scss';

export function Header ({showHeader, toogleHeader}) {
  const { logo, resume } = DB.header;

  return (
    <header 
      id='header'
      className={`header ${showHeader && "header--toogle"}`} 
      onClick={toogleHeader}
    >
      <nav className='navbar'>
        <a href='#top' className='logo'>
          <img className='logo__img' src={logo.img} alt={logo.alt} />
        </a>
        <Menu />
        <a className='resume' href={resume.url}>{resume.text}</a>
      </nav>
    </header>
  );
};
