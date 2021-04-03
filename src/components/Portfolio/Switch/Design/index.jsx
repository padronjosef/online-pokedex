import React from "react";
import DB from "/src/DB";

const Design = () => (
  <>
    <div
      className="projects"
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
    >
      {DB.designs.slice(0, 9).map(({ img, name }, index) => (
        <figure className="projects__figure" key={index}>
          <img className="projects__img" src={img} alt={name} />
        </figure>
      ))}
    </div>
    <a
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      className="btn"
      href="https://www.behance.net/gallery/110691601/Platzi-OpenGrafts"
      target="__black"
    >
      View them all
    </a>
  </>
);

export default Design;
