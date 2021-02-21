import React from "react";
import "./style.scss";

const Hamburger = () => {
  const toggleBurgerBtn = () => {
    let modal = document.body.style.overflow;

    hamburger.classList.toggle("hamburger--is-active");
    header.classList.toggle("header--is-active");
    
    (modal == 'hidden') ? modal = document.body.style.overflow = 'visible' : modal = document.body.style.overflow = "hidden"
  }

  return (
    <button className="hamburger" id="hamburger" onClick={toggleBurgerBtn}>
      <div className="hamburger__div"></div>
      <div className="hamburger__div"></div>
      <div className="hamburger__div"></div>
    </button>
  );
};

export default Hamburger;
