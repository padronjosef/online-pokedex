import React from 'react';
import AnimatedDiv from '../../complements/AnimatedDiv';

const Article = ({ totalToRender }) => (
  <AnimatedDiv className='blog__wrapper'>
    {totalToRender.map(({ link, img, title, time, paragraph }) => (
      <a href={link} target='__black' className='article' key={title}>
        <figure className='article__figure'>
          <img className='article__img' src={img} alt={title} />
        </figure>
        <div className='article__details'>
          <time className='article__time'>{time}</time>
          <h3 className='article__title'>{title}</h3>
          <p className='article__text'>{paragraph}</p>
        </div>
      </a>
    ))}
  </AnimatedDiv>
);

export default Article;
