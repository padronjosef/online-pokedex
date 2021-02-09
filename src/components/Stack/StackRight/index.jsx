import React from "react";

import "./style.css";

const StackRight = ({ name, img, p, link } = props) => {
  return (
    <div className="stack-right" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
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
