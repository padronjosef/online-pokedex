import React from 'react';
import DB from '../../DB';
import { getTheme, toogleTheme } from '../helpers';
import { Menu } from './components';
import './style.scss';

export function Header ({showHeader, toogleHeader}) {
  const { logo, resume, moon, sun } = DB.header;
  const icon = getTheme() ==='dark' ? moon : sun
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
        <div className='header__complements'>
          <a className='header__resume' href={resume.url}>{resume.text}</a>
          <img className='header__theme' onClick={toogleTheme} src={icon.src} alt={icon.name} />
        </div>
      </nav>
    </header>
  );
};
