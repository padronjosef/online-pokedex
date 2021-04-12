import React, { useState } from "react";
import StackLeft from "./StackLeft";
import StackRight from "./StackRight";
import DB from "/src/DB";
import "./style.scss";

const Stack = () => {
  const { stack } = DB;

  const [showStack, setShowStack] = useState(stack[0]);
  return (
    <section
      id="stack"
      className="stack"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-mirror="true"
    >
      <h2>All the technologies I've use</h2>
      <div className="stack__wrapper">
        <StackLeft handelOpen={setShowStack} />
        <StackRight {...showStack} />
      </div>
    </section>
  );
};

export default Stack;
