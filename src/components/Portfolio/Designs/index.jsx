import React from "react";

import assets from "../../../assets";

import "./style.css";

const Designs = () => (
  <div className="desings-container">
    {assets.designs.map((data, index) => {
      return <img src={data.img} alt={data.name} key={`data-${index}`} />;
    })}
  </div>
);

export default Designs;
