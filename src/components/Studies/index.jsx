import React from "react";
import BtnShow from "../complements/BtwShow";

import Certificates from "./Certificates";

const Studies = () => (
  <section id="studies" className="estudies" data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-out" data-aos-once="true">
    <h2>Everything I have learned</h2>
    <Certificates />
    <BtnShow value="46 certificates" />
  </section>
);

export default Studies;
