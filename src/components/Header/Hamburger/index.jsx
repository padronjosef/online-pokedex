import React from "react";
import "./style.scss";

const Hamburger = () => {
  const closeMenu = () => {
    let modal = document.body.style.overflow;

    hamburger.classList.toggle("hamburger--is-active");
    header.classList.toggle("header--is-active");
    (modal == 'hidden') ? modal = document.body.style.overflow = 'visible' : modal = document.body.style.overflow = "hidden"
  }

  return (
    <div className="hamburger" id="hamburger" onClick={closeMenu}>
      <div className="hamburger__div"></div>
      <div className="hamburger__div"></div>
      <div className="hamburger__div"></div>
    </div>
  );
};

export default Hamburger;
