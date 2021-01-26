import React from 'react';
import assets from '../../assets';

import './style.css'

const logo = assets.navbar.logo

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#main" className="logo">
          <img  className="logo__img" src={logo.img} alt={logo.alt}/>
        </a>
        <ul className="main-menu">
          <li className="menu__item"><a href="#stack" className="menu__link"><span className="menu__span" >01.</span>Stack</a></li>
          <li className="menu__item"><a href="#portfolio" className="menu__link"><span className="menu__span" >02.</span>Portfolio</a></li>
          <li className="menu__item"><a href="#studies" className="menu__link"><span className="menu__span"> 03.</span>Studies</a></li>
          <li className="menu__item"><a href="#blog" className="menu__link"><span className="menu__span" >04.</span>Blog</a></li>
          <li className="menu__item"><a href="#footer" className="menu__link"><span className="menu__span" >05.</span>Contact</a></li>
        </ul>
        <a href="#" className="resume">Resume</a>
      </nav>
    </header>
  )
}

export default Header;
