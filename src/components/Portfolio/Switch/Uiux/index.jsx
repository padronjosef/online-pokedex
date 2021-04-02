import React from "react";
import DB from '/src/DB';

const Uiux = () => (
  <div className="projects" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    {DB.uxix.slice(0, 5).map(({link, img, name}, index) => (
      <a className="projects__figure" href={link} target="__black" key={index} >
        <img className="projects__img" src={img} alt={name}/>
      </a>
    ))}
  </div>
);

export default Uiux;
