import React from "react";
import Article from "./Article";
import BtnShow from "../complements/BtwShow";

import "./style.css";

const Blog = () => (
  <section id="blog" className="blog">
    <h2>Things I've Written To The Internet</h2>
    <div className="blog__wrapper">
      <Article />
      <Article />
      <Article />
    </div>
    <BtnShow value="articles" />
  </section>
);

export default Blog;
