import React, { Fragment, useState } from 'react';
import BtnFile from '../complements/BtnFile';
import BtwShow from '../complements/BtwShow';
import Code from './Code';
import Uiux from './Uiux';
import Designs from './Designs';

import './style.css'

const Portfolio = () => {
  const [show, setShow] = useState("Code")

  return (
    <section id="Portfolio">
      <h4>Some Things I’ve Built</h4>

      <div className="switch">
        <input type="radio" id="Code" name="switchPortfolio" value="Code" defaultChecked />
        <label onClick={ ()=> setShow("Code") } htmlFor="Code">Code</label>

        <input type="radio" id="UI/UX" name="switchPortfolio" value="UI/UX" />
        <label onClick={ ()=> setShow("UI/UX") } htmlFor="UI/UX">UI/UX</label>

        <input type="radio" id="Designs" name="switchPortfolio" value="Designs" />
        <label onClick={ ()=> setShow("Designs") } htmlFor="Designs">Designs</label> 
      </div>

      <BtnFile />

      <div className="section-switch">
        {show === "Code" && <Code />}
        {show === "UI/UX" && <Uiux />}
        {show === "Designs" && <Designs />}
      </div>

      <BtwShow />
    </section>
  )
};

export default Portfolio;
