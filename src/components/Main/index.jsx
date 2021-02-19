import React from "react";
import assets from "../../containers/assets/assets";

import "./style.scss";

const photo = assets.hero;

const Main = () => (
  <main id="main" className="main" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    <div className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__title">Jose Padron</h1>
        <p className="hero__messege">
          React Frontend Developer & Interface and User Experience Desginer (UI / UX)
        </p>
        <q className="hero__quote" cite="">
          Fake it until you make it
        </q>
      </div>
      <a className="photo" href="https://github.com/padronjosef/Portfolio-React" target="__blank">
        <span className="photo__span">View Portfolio <br /> Code</span>
        <img className="photo__img" src={photo.img} alt={photo.alt} />
      </a>
    </div>
  </main>
);

export default Main;
