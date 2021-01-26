import React from "react";
import StackLeft from "./StackLeft";
import StackRight from "./StackRight";

import "./style.css";

const Stack = () => (
  <section id="stack" className="stack">
    <h2>
      <span>01.</span> All the technologies I've use
    </h2>
    <div className="stack__wrapper">
      <StackLeft />
      <StackRight />
    </div>
  </section>
);

export default Stack;
