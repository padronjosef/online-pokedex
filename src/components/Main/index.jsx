import React from "react";
import assets from "../../assets";

import "./style.css";

const photo = assets.hero;

const Main = () => (
  <main id="main" className="main">
    <div className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__title">Jose Padron</h1>
        <p className="hero__messege">
          React Frontend Developer & Interface and User Experience Desginer (UI
          / UX)
        </p>
        <q className="hero__quote" cite="">
          Fake it until you make it
        </q>
      </div>
      <figure className="photo">
        <img className="photo__img" src={photo.img} alt={photo.alt} />
      </figure>
    </div>
  </main>
);

export default Main;
