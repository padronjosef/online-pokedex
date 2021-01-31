import React from "react";
import BtnShow from "../complements/BtwShow";

import Certificate from "./Certificate";

import "./style.css";

const Studies = () => (
  <section id="studies" className="estudies">
    <h2>Everything I have learned</h2>
    <Certificate />
    <BtnShow value="certificates" />
  </section>
);

export default Studies;
