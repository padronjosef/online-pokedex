import React from 'react';
import BtnFile from '../complements/BtnFile'
import ProjectBig from './ProjectBig';
import ProjectSmall from './ProjectSmall';

import './style.css'

const Portfolio = () =>
  <section id="Portfolio">
    <h4>Some Things I’ve Built</h4>
    <div className="switch">
      <input id="on" name="state-d" type="radio"/>
      <label htmlFor="on" onClick={()=> {}} >Code</label>

      <input id="on" name="state-d" type="radio"/>
      <label htmlFor="na" className="disabled" onClick={()=> {}} >UI/UX</label>

      <input id="off" name="state-d" type="radio" />
      <label htmlFor="off" onClick={()=> {}} >Designs</label>
    </div>
    <BtnFile />
    <ProjectBig />
    <ProjectSmall />
  </section>

export default Portfolio;
