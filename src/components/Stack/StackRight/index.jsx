import React from "react";

import assets from "/src/assets";

import "./style.css";

const valueStack = assets.stack[0];

// const StackRight = () => {
//   return (
//     <div className="stack-right">
//       <dl className="stack-right-details">
//         <dt>{valueStack.name}</dt>
//         <img src={valueStack.img} alt={valueStack.name} />
//         <div className="stack-right-details-text">
//           <dd>{valueStack.p}</dd>
//           <a href={valueStack.link} target="_blank">
//             <span>https://www.{valueStack.name}.com</span>
//           </a>
//         </div>
//       </dl>
//     </div>
//   );
// };

const StackRight = (props) => {
  return (
    <div className="stack-right">
      <dl className="stack-right-details">
        <dt>{props.name}</dt>
        <img src={props.img} alt={props.name} />
        <div className="stack-right-details-text">
          <dd>{props.p}</dd>
          <a href={props.link} target="_blank">
            <span>https://www.{props.name}.com</span>
          </a>
        </div>
      </dl>
    </div>
  );
};

export default StackRight;
