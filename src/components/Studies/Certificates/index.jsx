import React from "react";
import assets from "/src/assets";

import "./style.css";

const Certificates = () => (
  <div className="courses">
    {assets.certificates.map((data, index) => {
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
