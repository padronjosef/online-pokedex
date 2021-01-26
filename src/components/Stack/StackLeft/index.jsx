import React from "react";
// import StackRight from '../StackRight';

import "./style.css";

import assets from "/src/assets";

const StackLeft = () => {
  return (
    <div className="stack-left">
      {assets.stack.map((data, index) => {
        return (
          <img
            className="stack-left__img"
            onClick={() => console.log(data)}
            src={data.img}
            alt={data.name}
            key={`data-${index}`}
          />
        );
      })}
    </div>
  );
};

export default StackLeft;
