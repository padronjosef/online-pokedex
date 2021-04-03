import React from "react";
import "./style.scss";

const BtnShow = ({ onClick, value, total, minToRendered }) => {
  const text = (total === minToRendered) ? `View all the ${value}`: 'show less' 
  
  return (
    <a onClick={onClick} className="btn">
      {text}
    </a>
  );
};

export default BtnShow;
