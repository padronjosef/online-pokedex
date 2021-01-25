import React from 'react';
import BtnShow from '../complements/BtwShow';

import Course from './Course';

import './style.css'

const Studies = () =>
  <section id="studies">
    <h2><span>03.</span> Everything I have learned</h2>
    <div className="carears-container">
      <Course />
      <Course />
    </div>
    <div className="courses-container">
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
    <BtnShow value="certificates"/>
  </section>

export default Studies;
