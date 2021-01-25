import React from "react";

import assets from "../../../assets";

import "./style.css";

const Uiux = () => (
  <div className="uxix-container">
    {assets.uxix.map((data, index) => {
      return <img src={data.img} alt={data.name} key={`data-${index}`} />;
    })}
  </div>
);

export default Uiux;
