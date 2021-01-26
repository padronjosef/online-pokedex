import React from "react";

import assets from "/src/assets";

import "./style.css";

const valueStack = assets.stack[1];

const StackRight = () => {
  return (
    <div className="stack-right">
      <dl className="stack-right__wrapper">
        <dt className="stack-right__title">{valueStack.name}</dt>
        <img className="stack-right__img" src={valueStack.img} alt={valueStack.name} />
        <div className="stack-right-details">
          <dd className="stack-right__details">{valueStack.p}</dd>
          <a className="stack-right__link" href={valueStack.link} target="_blank">
            <span className="stack-right__span">
              https://www.{valueStack.name}.com
            </span>
          </a>
        </div>
      </dl>
    </div>
  );
};

export default StackRight;
