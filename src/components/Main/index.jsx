import React from 'react';
import assets from '../../assets';

import './style.css'

const photo = assets.hero

const Main = () =>
  <main id="main">
    <div className="hero">
      <div className="hero-description">
        <h1>Jose Padron</h1>
        <p>React Frontend Developer & Interface and User Experience Desginer (UI / UX)</p>
        <q cite="">Fake it until you make it</q>
      </div>
      <figure>
        <img src={photo.img} alt={photo.alt}/>
      </figure>
    </div>
  </main>

export default Main;
