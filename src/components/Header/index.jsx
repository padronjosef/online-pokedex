import React from 'react';
import Scrollspy from 'react-scrollspy';
import Hamburger from './Hamburger';
import closeMenu from '../complements/CloseMenu';
import DB from '../../DB';
import './style.scss';

const { logo } = DB.navbar;

const Header = () => (
  <>
    <Hamburger />
    <header className='header' id='header'>
      <nav className='navbar' onClick={closeMenu}>
        <a href='#top' className='logo'>
          <img className='logo__img' src={logo.img} alt={logo.alt} />
        </a>
        <Scrollspy className='menu' id='menu' items={['main', 'about', 'stack', 'portfolio', 'blog', 'studies', 'footer']} currentClassName='menu__item--active' offset={-100}>
          <li className='menu__item'><a href='#main' className='menu__link'>blank</a></li>
          <li className='menu__item'><a href='#about' className='menu__link'>About</a></li>
          <li className='menu__item'><a href='#stack' className='menu__link'>Stack</a></li>
          <li className='menu__item'><a href='#portfolio' className='menu__link'>Portfolio</a></li>
          <li className='menu__item'><a href='#blog' className='menu__link'>Blog</a></li>
          <li className='menu__item'><a href='#studies' className='menu__link'>Studies</a></li>
          <li className='menu__item'><a href='#footer' className='menu__link'>Contact</a></li>
        </Scrollspy>
        <div className='center'>
          <a href='https://github.com/padronjosef/Portfolio-Assets/raw/main/HV%20Jose%20Padron.pdf' className='resume'>Resume</a>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
