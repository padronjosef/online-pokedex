import React from "react";
import assets from "../../assets";

import "./style.css";

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
  <footer id="Footer">
    <h4>LET’S CREATE SOMETHING GREAT</h4>
    <h5>
      If you like my work and have some cool project to work on, just send{" "}
      <br /> me direct message or contact me through social sites listed below.
    </h5>
    <a className="mailTo" href="mailto:josepadron.go@gmail.com">
      Get In Touch
    </a>
    <ul className="social">{social}</ul>
  </footer>
);

export default Footer;
