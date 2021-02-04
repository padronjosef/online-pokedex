import React from 'react';
import assets from "/src/assets";

import './style.css'

// const Article = () => {
//   return (
//     <a href="" target="__black" className="article">
//       <img className="article__img" src="https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/img-project.webp" alt="article image"/>
//       <div className="article__details">
//         <time className="article__time">25 march 2019</time>
//         <h3 className="article__title">Lorem Ipsum</h3>
//         <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by</p>
//       </div>
//     </a>
//   )
// }

const Article = () => (
  <div className="blog__wrapper">
    {assets.blogs.map((data, index) => {
      return (
        <a href={data.link} target="__black" className="article" key={`data-${index}`}>
          <img className="article__img" src={data.img} alt={data.title}/>
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
