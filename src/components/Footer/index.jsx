import React from 'react';
import facebookIcon from './assets/social-facebook.svg';
import linkedinIcon from './assets/social-linkedin.svg';
import twitterIcon from './assets/social-twitter.svg';
import githubIcon from './assets/social-github.svg';
import behanceIcon from './assets/social-behance.svg';

import './style.css'

const Footer = () =>
  <footer id="Footer">
    <h4>LET’S CREATE SOMETHING GREAT</h4>
    <h5>If you like my work and have some cool project to work on, just send <br /> me direct message or contact me through social sites listed below.</h5>

    <a className="mailTo" href="mailto:josepadron.go@gmail.com">Get In Touch</a>

    <ul className="social">
      <li>
        <img src={facebookIcon} alt=""/>
        <a href="https://www.facebook.com/padronjosef/" target="_blank">Facebook</a>
      </li>
      <li>
        <img src={linkedinIcon} alt=""/>
        <a href="https://www.linkedin.com/in/padronjosef/" target="_blank">LinkedIn</a>
      </li>
      <li>
        <img src={twitterIcon} alt=""/>
        <a href="https://twitter.com/padronjosef" target="_blank">Twitter</a>
      </li>
      <li>
        <img src={githubIcon} alt=""/>
        <a href="https://github.com/padronjosef" target="_blank">GitHub</a>
      </li>
      <li>
        <img src={behanceIcon} alt=""/>
        <a href="https://www.behance.net/josepadron" target="_blank">Behance</a>
      </li>
    </ul>
  </footer>

export default Footer;
