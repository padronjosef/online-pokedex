import React from "react";
import BtwShow from "../complements/BtwShow";
import Switch from "./Switch";
import "./style.css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>
        <span>02.</span> Some Things I’ve Built
      </h2>

      <Switch />

      <BtwShow value="projects" />
    </section>
  );
};

export default Portfolio;
