import React from 'react';
import logoGaiden from '../assets/static/logo-gaiden.svg';
import viewCode from '../assets/static/social-github.svg';

import '../assets/styles/components/NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <img className="logo" src={logoGaiden} alt="logo gaiden"/>
      <ul className="menu">
        <li><a href="#MyStack">My Stack</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Studies">Studies</a></li>
        <li><a href="#Articles">Articles</a></li>
        <li><a href="#Footer">Contact</a></li>
      </ul>
      <div className="viewCode">
        <img src={viewCode} alt="view code"/>
        <a href="https://github.com/padronjosef/Portfolio-React" target="_blank" >View Code</a>
      </div>
    </nav>
  )
}

export default NavBar;
