import React from "react";
import "./style.scss";

const StackRight = ({ name, img, p, link }) => {
  return (
    <div className="stack-right" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
      <dl className="stack-right__wrapper">
        <dt className="stack-right__title">{name}</dt>
        <img className="stack-right__img" src={img} alt={name} />
        <dd className="stack-right__details">{p}</dd>
        <a className="stack-right__link" href={link} target="_blank">
          https://www.<span className="stack-right__span">{name}</span>.com
        </a>
      </dl>
    </div>
  );
};

export default StackRight;
