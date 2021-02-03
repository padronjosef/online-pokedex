import React from "react";
import BtnShow from "../complements/BtwShow";

import Certificates from "./Certificates";

import "./style.css";

const Studies = () => (
  <section id="studies" className="estudies">
    <h2>Everything I have learned</h2>
    <Certificates />
    <BtnShow value="certificates" />
  </section>
);

export default Studies;
