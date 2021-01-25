import React from 'react';
import assets from '../../assets';

import './style.css'

const logo = assets.navbar.logo

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#main" className="logo"><img src={logo.img} alt={logo.alt}/></a>
        <ul className="menu">
          <li><a href="#stack"><span>01.</span>Stack</a></li>
          <li><a href="#portfolio"><span>02.</span>Portfolio</a></li>
          <li><a href="#studies"><span>03.</span>Studies</a></li>
          <li><a href="#blog"><span>04.</span>Blog</a></li>
          <li><a href="#footer"><span>05.</span>Contact</a></li>
        </ul>
        <a href="#" className="resume">Resume</a>
      </nav>
    </header>
  )
}

export default Header;
