import React from "react";
import StackLeft from "./StackLeft";
import StackRight from "./StackRight";

import "./style.css";

const Stack = () => (
  <section id="stack">
    <h2>
      <span>01.</span> All the technologies I've use
    </h2>
    <div className="stack">
      <StackLeft />
      <StackRight
        name="JavaScript"
        img="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/30de37cb9c4dabe0bee035a0a49fd7f34a7e7302/icon-js.svg"
        p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, perspiciatis officia rem corrupti reprehenderit hic voluptates perferendis. Veniam repellat eligendi, a dolores, nostrum necessitatibus libero neque ratione modi quod aut"
        link="https://javascript.com"
      />
    </div>
  </section>
);

export default Stack;
