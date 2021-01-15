import React from 'react'
import assets from "../../assets";

import "./style.css";

const stack = assets.stack.map((data, index) => {
  return (
    <img src={data.img} alt={data.name} key={`data-${index}`} />
  );
});

// const stack = assets.stack.map((data, index) => {
//   return (
//     <div key={`data-${index}`}>
//       <img src={data.img} alt={data.name} />
//       <p>{data.p}</p>
//       <a href={data.link} target="_blank">
//         {data.name}
//       </a>
//     </div>
//   );
// });

const MyStack = () =>
  <section id="MyStack" className="MyStack">
    <div className="stack-left">
      <h4>My Stack</h4>
      <div>
        {stack}
      </div>
    </div>
    <div className="stack-right">
      <h4>WebPack</h4>
      <img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-webpack.svg" alt=""/>
      <div className="stack-right-details">
        <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick</p>
        <a href="https://webpack.js.org/" target="_blank">webpack.js.org</a>
      </div>
    </div>
  </section>

export default MyStack;
