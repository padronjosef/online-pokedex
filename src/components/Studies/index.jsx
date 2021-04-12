import React, { useState } from "react";
import DB from "/src/DB";
import BtnShow from "../complements/BtwShow";

import Certificates from "./Certificates";

const Studies = () => {
  const { certificates } = DB;
  const inititalState = certificates.slice(0, 6);

  const [count, setCount] = useState(inititalState);

  return (
    <section
      id="studies"
      className="estudies"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-mirror="true"
    >
      <h2>Everything I have learned</h2>
      <Certificates totalToRender={count} />
      <BtnShow
        minimun={6}
        total={count.length}
        value={certificates.length + " certficates"}
        onClick={() =>
          count.length === 6 ? setCount(certificates) : setCount(inititalState)
        }
      />
    </section>
  );
};

export default Studies;
