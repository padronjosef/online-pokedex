import React from 'react'
import assets from "../../assets";

import "./style.css";

const stack = assets.stack.map((data, index) => {
  return (
    <img src={data.img} alt={data.name} key={`data-${index}`} />
  );
});

const stackRight = assets.stack.map((data, index) => {
  return (
    <dl className="stack-right-details" key={`data-${index}`}>
      <dt>{data.name}</dt>
      <img src={data.img} alt={data.name} />
      <div className="stack-right-details-text">
        <dd>{data.p}</dd>
        <a href={data.link} target="_blank"> {data.name}</a>
      </div>
    </dl>
  );
});

const MyStack = () =>
  <section id="MyStack" className="MyStack">
    <div className="stack-left">
      <h4>My Stack</h4>
      <div>
        {stack}
      </div>
    </div>
    <div className="stack-right">
      {stackRight}
    </div>
  </section>

export default MyStack;
