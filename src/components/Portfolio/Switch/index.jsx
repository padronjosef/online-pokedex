import React, { useState, Fragment } from 'react';
import Code from './Code';
import Uiux from './Uiux';
import Design from './Design';

import "./style.css"

const Switch = () => {
  const [show, setShow] = useState("Code")

  return (
    <Fragment>
      <div className="switch">
        <input className="switch__input" type="radio" id="Code" name="switchPortfolio" value="Code" defaultChecked />
        <label className="switch__label" onClick={ ()=> setShow("Code") } htmlFor="Code">Code</label>

        <input className="switch__input" type="radio" id="UI/UX" name="switchPortfolio" value="UI/UX" />
        <label className="switch__label" onClick={ ()=> setShow("UI/UX") } htmlFor="UI/UX">UI/UX</label>

        <input className="switch__input" type="radio" id="Designs" name="switchPortfolio" value="Designs" />
        <label className="switch__label" onClick={ ()=> setShow("Designs") } htmlFor="Designs">Designs</label> 
      </div>

      <Fragment>
        {show === "Code" && <Code />}
        {show === "UI/UX" && <Uiux />}
        {show === "Designs" && <Design />}
      </Fragment>
    </Fragment>
  )
}

export default Switch