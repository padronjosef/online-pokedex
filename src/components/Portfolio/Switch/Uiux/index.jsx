import React from "react";
import DB from '/src/DB';

const Uiux = () => (
  <div className="projects" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    {DB.uxix.slice(0, 5).map((data, index) => {
      return (
        <a className="projects__figure" href={data.link} target="__black" key={`data-${index}`} >
          <img className="projects__img" src={data.img} alt={data.name}/>
        </a>
      )
    })}
  </div>
);

export default Uiux;
