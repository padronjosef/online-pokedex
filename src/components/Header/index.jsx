import React from 'react';
import assets from '../../assets';

import './style.css'

const logo = assets.navbar.logo
const viewCode = assets.navbar.viewcode

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#main"><img className="logo" src={logo.img} alt={logo.alt}/></a>
        <ul className="menu">
          <li><a href="#MyStack">Stack</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Studies">Studies</a></li>
          <li><a href="#Articles">Articles</a></li>
          <li><a href="#Footer">Contact</a></li>
        </ul>
        <div className="viewCode">
          <img src={viewCode.img} alt="view code"/>
          <a href="https://github.com/padronjosef/Portfolio-React" target="_blank" >View Code</a>
        </div>
      </nav>
    </header>
  )
}

export default Header;
