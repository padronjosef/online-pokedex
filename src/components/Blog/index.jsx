import React, { useState } from "react";
import DB from "/src/DB";
import Article from "./Article";
import BtnShow from "../complements/BtwShow";

const Blog = () => {
  const { blogs } = DB;
  const inititalState = blogs.slice(0, 3)

  const [count, setCount] = useState(inititalState);

  return (
    <section
      id="blog"
      className="blog"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-mirror="true"
    >
      <h2>Things I've Written To The Internet</h2>
      <Article totalToRender={count} />
      <BtnShow
        minimun={3}
        total={count.length}
        value="articles"
        onClick={() =>
          count.length === 3 ? setCount(blogs) : setCount(inititalState)
        }
      />
    </section>
  );
};

export default Blog;
