import React, { Fragment } from 'react';
import Hamburger from './Hamburger'
import Scrollspy from 'react-scrollspy'
import DB from '/src/DB';
import './style.scss'

const logo = DB.navbar.logo

const closeMenu = () => {
  let modal = document.body.style.overflow;
  header.classList.toggle("header--is-active");
  hamburger.classList.toggle("hamburger--is-active");
  (modal == 'hidden') ? modal = document.body.style.overflow = 'visible' : modal = document.body.style.overflow = "hidden"
}

const Header = () => {
  return (
    <Fragment>
      <Hamburger />
      <header className="header" id="header">
        <nav className="navbar" onClick={closeMenu} >
          <a href="#" className="logo">
            <img className="logo__img"src={logo.img} alt={logo.alt}/>
          </a>
          <Scrollspy className="menu" id="menu" items={ ['main', 'stack', 'portfolio', 'studies', 'blog', 'footer'] } currentClassName="menu__item--active" offset={-100}>
            <li className="menu__item"><a href="#main" className="menu__link"></a></li>
            <li className="menu__item"><a href="#stack" className="menu__link">Stack</a></li>
            <li className="menu__item"><a href="#portfolio" className="menu__link">Portfolio</a></li>
            <li className="menu__item"><a href="#studies" className="menu__link">Studies</a></li>
            <li className="menu__item"><a href="#blog" className="menu__link">Blog</a></li>
            <li className="menu__item"><a href="#footer" className="menu__link">Contact</a></li>
          </Scrollspy>
          <div className="center">
            <a href="https://raw.githubusercontent.com/padronjosef/Portfolio-React/b20042a49ad9a43ea912c1f3e0d42ce2d512112b/src/HV-Jose-Padron.pdf" className="resume">Resume</a>
          </div>
        </nav>
      </header>
    </Fragment>
  )
}

export default Header;
