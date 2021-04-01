import React, { useState } from "react";
import DB from '/src/DB';
import BtnShow from "../complements/BtwShow";

import Certificates from "./Certificates";

const Studies = () => {
  const [count, setCount] = useState(DB.certificates.slice(0,6));
  
  return (
    <section id="studies" className="estudies" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
    <h2>Everything I have learned</h2>
    <Certificates certificates={count}/>
    <BtnShow value={`${count.length} certficates`} />
  </section>
  )
};

export default Studies;
