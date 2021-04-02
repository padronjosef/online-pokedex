import React from "react";
import DB from '/src/DB';
import "./style.scss";

const StackLeft = ({handelOpen}) => {
  return (
    <div className="stack-left" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
      {DB.stack.map(({img, name} = data, index) => {
        return (
          <figure className="stack-left__figure" key={`data-${index}`} >
            <img className="stack-left__img" onClick={()=> handelOpen(data)} src={img} alt={name}/>
          </figure>
        );
      })}
    </div>
  );
};

export default StackLeft;
