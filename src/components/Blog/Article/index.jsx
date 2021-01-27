import React from 'react';

import './style.css'

const Article = () => {
  return (
    <article className="article">
      <figure className="article__figure">
        <img className="article__img" src="https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/img-project.webp" alt="article image"/>
      </figure>
      <div className="article__details">
        <time className="article__time">25 march 2019</time>
        <h3 className="article__title">Lorem Ipsum</h3>
        <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by</p>
      </div>
    </article>
  )
}

export default Article;
