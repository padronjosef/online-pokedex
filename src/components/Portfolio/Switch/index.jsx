import React, { useState, Fragment } from 'react';
import Code from '../Code';
import Uiux from '../Uiux';
import Designs from '../Designs';

import "./style.css"

const Switch = () => {
  const [show, setShow] = useState("Code")

  return (
    <Fragment>
      <div className="switch">
        <input type="radio" id="Code" name="switchPortfolio" value="Code" defaultChecked />
        <label onClick={ ()=> setShow("Code") } htmlFor="Code">Code</label>

        <input type="radio" id="UI/UX" name="switchPortfolio" value="UI/UX" />
        <label onClick={ ()=> setShow("UI/UX") } htmlFor="UI/UX">UI/UX</label>

        <input type="radio" id="Designs" name="switchPortfolio" value="Designs" />
        <label onClick={ ()=> setShow("Designs") } htmlFor="Designs">Designs</label> 
      </div>

      <div className="section-switch">
        {show === "Code" && <Code />}
        {show === "UI/UX" && <Uiux />}
        {show === "Designs" && <Designs />}
      </div>
    </Fragment>
  )
}

export default Switch