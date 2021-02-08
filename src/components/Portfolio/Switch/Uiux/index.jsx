import React from "react";

import assets from "/src/assets";

const Uiux = () => (
  <div className="projects__uiux">
    {assets.uxix.map((data, index) => {
      return (
        <figure className="porjects__figure" key={`data-${index}`} >
          <img className="projects__img" src={data.img} alt={data.name}/>
        </figure>
      )
    })}
  </div>
);

export default Uiux;
