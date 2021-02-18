import React from "react";
import assets from "../../assets";

import "./style.css";

const logo = assets.navbar.logo;

const social = assets.footer.map((data, index) => {
  return (
    <li className="social__item" key={`data-${index}`}>
      <a className="social__link" href={data.link} target="_blank">
        <img className="social__img" src={data.img} alt={data.name} />
        {data.name}
      </a>
    </li>
  );
});

const Footer = () => (
  <footer id="footer" className="footer" data-aos="zoom-in">
    <h2 className="footer__title"> LET’S CREATE SOMETHING GREAT</h2>
    <p className="footer__messege">
      If you like my work and have some cool project to work on, just send me
      direct message or contact me through social sites listed below.
    </p>
    <a className="footer__btn btn" href="mailto:josepadron.go@gmail.com">
      Let's get in touch
    </a>
    <ul className="social">{social}</ul>
    <div className="copy-write">
      <p className="copy-write__message">&copy; Made with &#x1F90D; by</p>
      <img className="copy-write__img" src={logo.img} alt={logo.alt} />
    </div>
  </footer>
);

export default Footer;
