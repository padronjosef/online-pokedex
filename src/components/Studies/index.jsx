import React from 'react';
import BtnFile from '../complements/BtnFile/';
import BtnShow from '../complements/BtwShow';

import Course from './Course';

import './style.css'

const Studies = () =>
  <section id="Studies" className="studies">
    <h4>Everything I have learned</h4>
    <BtnFile />
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
    <BtnShow />
  </section>

export default Studies;
