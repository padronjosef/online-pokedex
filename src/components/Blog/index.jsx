import React, { useState } from "react";
import DB from "/src/DB";
import Article from "./Article";
import BtnShow from "../complements/BtwShow";

const Blog = () => {
  const [count, setCount] = useState(DB.blogs.slice(0, 3));

  return(
    <section
    id="blog"
    className="blog"
    data-aos="fade-up"
    data-aos-duration="1500"
    data-aos-mirror="true"
    >
      <h2>Things I've Written To The Internet</h2>
      <Article totalToRender={count}  />
      <BtnShow
        minToRendered={3}
        total = {count.length}
        onClick={() => count.length === 3 ? setCount(DB.blogs): setCount(DB.blogs.slice(0, 3))}
        value="articles"
        />
    </section>
  )
}

export default Blog;
