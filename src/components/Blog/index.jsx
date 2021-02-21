import React from "react";
import Article from "./Article";
// import BtnShow from "../complements/BtwShow";

const Blog = () => (
  <section id="blog" className="blog" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
    <h2>Things I've Written To The Internet</h2>
    <Article />
    {/* <BtnShow value="articles" /> */}
  </section>
);

export default Blog;
