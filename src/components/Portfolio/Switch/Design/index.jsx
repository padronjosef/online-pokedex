import React from "react";
import assets from "/src/containers/assets/assets";

const Design = () => (
  <div className="projects__design" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
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
