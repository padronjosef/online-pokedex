import React from 'react';
import assets from '../../assets';

import './style.css'

const photo = assets.hero

const Main = () =>
  <main>
    <div className="hero">
      <h3>Hello I'm</h3>
      <h1>Jose Padron</h1>
      <h2>Fake it until you make it</h2>
    </div>
    <img src={photo.img} alt={photo.alt}/>
  </main>


export default Main;
