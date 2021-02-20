import React from 'react';
import assets from "/src/containers/assets/assets";
import './style.scss'

const Article = () => (
  <div className="blog__wrapper" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    {assets.blogs.slice(0, 3).map((data, index) => {
      return (
        <a href={data.link} target="__black" className="article" key={`data-${index}`}>
          <figure>
            <img className="article__img" src={data.img} alt={data.title}/>
          </figure>
          <div className="article__details">
            <time className="article__time">{data.time}</time>
            <h3 className="article__title">{data.title}</h3>
            <p className="article__text">{data.paragraph}</p>
          </div>
        </a>
      );
    })}
  </div>
);

export default Article;
