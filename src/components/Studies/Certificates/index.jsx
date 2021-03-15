import React from "react";
import DB from '/src/DB';
import "./style.scss";

const Certificates = () => (
  <div className="courses" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    {DB.certificates.slice(0, 6).map(({link, img, name}, index) => {
      return (
        <a className="certificate" target="__blank" href={link} key={index}>
          <img className="certificate__img" src={img} alt={name} key={index} />
          <h3 className="certificate__name">{name}</h3>
        </a>
      );
    })}
  </div>
);

export default Certificates;
