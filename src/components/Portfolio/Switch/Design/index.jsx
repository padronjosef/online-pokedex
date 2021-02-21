import React from "react";
import DB from '/src/DB';

const Design = () => (
  <div className="projects" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    {DB.designs.slice(0, 9).map((data, index) => {
      return (
        <figure className="projects__figure" key={`data-${index}`} >
          <img className="projects__img" src={data.img} alt={data.name}/>
        </figure>
      )
    })}
  </div>
);

export default Design;
