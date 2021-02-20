import React from "react";
import "./style.scss";

const Hamburger = () => {
  const toggleBurgerBtn = () => {
    hamburger.classList.toggle("hamburger--is-active");
    header.classList.toggle("header--is-active");
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
