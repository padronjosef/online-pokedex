import React from "react";

import "./style.css";

const StackRight = ({name, img, p, link} = props) => {
  return (
    <div className="stack-right">
      <dl className="stack-right__wrapper">
        <dt className="stack-right__title">{name}</dt>
        <img className="stack-right__img" src={img} alt={name} />
        <div className="stack-right-details">
          <dd className="stack-right__details">{p}</dd>
          <a className="stack-right__link" href={link} target="_blank">
            <span className="stack-right__span">
              https://www.{name}.com
            </span>
          </a>
        </div>
      </dl>
    </div>
  );
};

export default StackRight;
