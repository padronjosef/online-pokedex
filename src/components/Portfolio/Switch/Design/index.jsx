import React from "react";
import DB from '/src/DB';

const Design = () => (
  <div className="projects" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    {DB.designs.slice(0, 9).map(({img,name}, index) => (
      <figure className="projects__figure" key={index} >
        <img className="projects__img" src={img} alt={name}/>
      </figure>
    ))}
  </div>
);

export default Design;
