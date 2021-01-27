import React from "react";

import assets from "/src/assets";

const Design = () => (
  <div className="projects__design">
    {assets.designs.map((data, index) => {
      return <img className="projects__img" src={data.img} alt={data.name} key={`data-${index}`} />;
    })}
  </div>
);

export default Design;
