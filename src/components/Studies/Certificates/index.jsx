import React from "react";
import DB from '/src/DB';
import "./style.scss";

const Certificates = () => (
  <div className="courses" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    {DB.certificates.slice(0, 6).map((data, index) => {
      return (
        <a className="certificate" target="__blank" href={data} href={data.link} key={`data-${index}`}>
          <img className="certificate__img" src={data.img} alt={data.name} key={`data-${index}`} />
          <h3 className="certificate__name">{data.name}</h3>
        </a>
      );
    })}
  </div>
);

export default Certificates;
