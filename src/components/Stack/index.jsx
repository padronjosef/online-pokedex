import React, {useState} from "react";
import StackLeft from "./StackLeft";
import StackRight from "./StackRight";

import assets from "/src/assets";

import "./style.css";

const Stack = () => {
  const [ showStack, setShowStack ] = useState(assets.stack[0]);
  return (
    <section id="stack" className="stack">
    <h2>All the technologies I've use</h2>
    <div className="stack__wrapper">
      <StackLeft handelOpen={setShowStack}/>
      <StackRight {...showStack}/>
    </div>
  </section>
  )
};

export default Stack;
