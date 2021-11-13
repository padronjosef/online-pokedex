import React from 'react';
import DB from '../../DB';
import Hamburger from './components';
import togleMobileMenu from '../complements/togleMobileMenu';
import Menu from './components/Menu';
import './style.scss';

const Header = () => {
  const { logo, resume } = DB.header;

  return (
    <>
      <Hamburger />
      <header id='header' className='header'>
        <nav className='navbar' onClick={togleMobileMenu}>
          <a href='#top' className='logo'>
            <img className='logo__img' src={logo.img} alt={logo.alt} />
          </a>
          <Menu />
          <a className='resume' href={resume.url}>{resume.text}</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
