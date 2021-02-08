import React from "react";

import assets from "/src/assets";

const Design = () => (
  <div className="projects__design">
    {assets.designs.map((data, index) => {
      return (
        <figure className="projects__figure" key={`data-${index}`} >
          <img className="projects__img" src={data.img} alt={data.name}/>
        </figure>
      )
    })}
  </div>
);

export default Design;
