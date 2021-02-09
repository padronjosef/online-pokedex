import React from "react";
import Article from "./Article";
import BtnShow from "../complements/BtwShow";

const Blog = () => (
  <section id="blog" className="blog" data-aos="fade-left" data-aos-duration="1200" data-aos-easing="ease-out" data-aos-once="true">
    <h2>Things I've Written To The Internet</h2>
    <Article />
    <BtnShow value="articles" />
  </section>
);

export default Blog;
