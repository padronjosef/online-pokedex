import React from 'react';

import BigProject from "./BigProject";
import SmallProject from "./SmallProject";

const Code = () => (
  <div className="projects__code">
    <BigProject />
    <BigProject />
    <div>
      <SmallProject />
      <SmallProject />
      <SmallProject />
    </div>
  </div>
);

export default Code;
