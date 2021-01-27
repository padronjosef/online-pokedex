import React from "react";

import assets from "/src/assets";

const Uiux = () => (
  <div className="projects__uiux">
    {assets.uxix.map((data, index) => {
      return <img className="projects__img" src={data.img} alt={data.name} key={`data-${index}`} />;
    })}
  </div>
);

export default Uiux;
