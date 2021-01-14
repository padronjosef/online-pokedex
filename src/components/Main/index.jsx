import React from 'react';
import photo from './assets/photo.png';

import './style.css'

const Main = () =>
  <main>
    <div className="hero">
      <h3>Hello I'm</h3>
      <h1>Jose Padron</h1>
      <h2>Fake it until you make it</h2>
    </div>
    <img src={photo} alt="photo jose padron"/>
  </main>

export default Main;
