import React from 'react';
// import StackRight from '../StackRight';

import "./style.css";

import assets from "/src/assets";

const StackLeft = () => {
  return (
    <div className="stack-left">
      {assets.stack.map((data, index) => {
        return(
          <img onClick={() => console.log(data)} src={data.img} alt={data.name} key={`data-${index}`} />
        )
      })}
    </div>  
  );
};

// function StackLeft() {
//   return (
//     <div>
//       <div className="stack-left">
//       {assets.stack.map((data, index) => {
//         return(
//           <img onClick={() => StackRight(data)} src={data.img} alt={data.name} key={`data-${index}`} />
//         )})}
//       </div>
//       <StackRight />
//     </div>
//   );
// }

// const StackRight = (data) => {
//   return (
//     <div className="stack-right">
//       {console.log(data)}
//       <dl className="stack-right-details">
//         <dt>{data.name}</dt>
//         <img src={data.img} alt={data.name} />
//         <div className="stack-right-details-text">
//           <dd>{data.p}</dd>
//           <a href={data.link} target="_blank">
//             <span>https://www.{data.name}.com</span>
//           </a>
//         </div>
//       </dl>
//     </div>
//   );
// };

// // caerle a coñaso a jhonny cuando lo vea

export default StackLeft;