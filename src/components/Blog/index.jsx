import React from "react";
import Article from "./Article";
import BtnShow from "../complements/BtwShow";

import "./style.css";

const Blog = () => (
  <section id="blog" className="blog">
    <h2>Things I've Written To The Internet</h2>
    <Article />
    <BtnShow value="articles" />
  </section>
);

export default Blog;
