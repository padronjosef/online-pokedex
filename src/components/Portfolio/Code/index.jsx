import React from "react";

import BigProject from "./BigProject";
import SmallProject from "./SmallProject";

import "./style.css";

const Code = () => (
  <div className="code">
    <div className="code-big">
      <BigProject />
      <BigProject />
    </div>
    <div className="code-small">
      <SmallProject />
      <SmallProject />
      <SmallProject />
    </div>
  </div>
);

export default Code;
