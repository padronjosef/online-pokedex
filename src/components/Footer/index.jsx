import React from "react";
import assets from "../../assets";

import "./style.css";

const logo = assets.navbar.logo

const social = assets.footer.map((data, index) => {
  return (
    <li key={`data-${index}`}>
      <a href={data.link} target="_blank">
        <img src={data.img} alt={data.name} />
        {data.name}
      </a>
    </li>
  );
});

const Footer = () => (
  <footer id="footer">
    <h2><span>05.</span> LET’S CREATE SOMETHING GREAT</h2>
    <p>
      If you like my work and have some cool project to work on, just send me direct message or contact me through social sites listed below.
    </p>
    <a className="btn" href="mailto:josepadron.go@gmail.com">
      Let's get in touch
    </a>
    <ul className="social">{social}</ul>
    <div className="copy-write">
      <p>&copy; Made with &#x1F90D; by </p>
      <img className="logo-footer" src={logo.img} alt={logo.alt} />
    </div>
  </footer>
);

export default Footer;
