import React from 'react';

import assets from "../../../assets";

import "./style.css";

const desings = assets.uxix.map((data, index) => {
  return (
    <img src={data.img} alt={data.name} key={`data-${index}`} />
  );
});

const Designs = () =>
  <div className="uxix-container">
    {desings}
  </div>

export default Designs