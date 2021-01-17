import React from 'react';

import assets from "../../../assets";

import "./style.css";

const desings = assets.designs.map((data, index) => {
  return (
    <img src={data.img} alt={data.name} key={`data-${index}`} />
  );
});

const Designs = () =>
  <div className="desings-container">
    {desings}
  </div>

export default Designs