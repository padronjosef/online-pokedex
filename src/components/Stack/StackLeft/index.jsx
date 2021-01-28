import React from "react";
import assets from "/src/assets";

import "./style.css";


const StackLeft = ({handelOpen}) => {
  return (
    <div className="stack-left">
      {assets.stack.map((data, index) => {
        return (
          <img className="stack-left__img" onClick={()=> handelOpen(data)} src={data.img} alt={data.name} key={`data-${index}`} />
        );
      })}
    </div>
  );
};

export default StackLeft;
