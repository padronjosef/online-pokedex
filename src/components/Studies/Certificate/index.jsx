import React from 'react';
import assets from "/src/assets";

import "./style.css";

const Certificate = () => {
  return (
    <div className="courses">
      {assets.certificates.map((data, index) => {
        return (
          <a href={data} href={data.link} target="__blank" key={`data-${index}`}>
            <img className="stack-left__img" src={data.img} alt={data.name} key={`data-${index}`} />
            <h3>{data.name}</h3>
          </a>
        );
      })}
    </div>
  );
};

export default Certificate;