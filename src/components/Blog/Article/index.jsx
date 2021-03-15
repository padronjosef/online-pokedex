import React from "react";
import DB from "/src/DB";
import "./style.scss";

const Article = () => (
  <div className="blog__wrapper" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true" >
    {DB.blogs.slice(0, 3)
      .map(({ link, img, title, time, paragraph }, index) => {
        return (
          <a href={link} target="__black" className="article" key={index}>
            <figure>
              <img className="article__img" src={img} alt={title} />
            </figure>
            <div className="article__details">
              <time className="article__time">{time}</time>
              <h3 className="article__title">{title}</h3>
              <p className="article__text">{paragraph}</p>
            </div>
          </a>
        );
      })
    }
  </div>
);

export default Article;
