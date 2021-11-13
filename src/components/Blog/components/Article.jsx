import React from 'react';
import AnimatedDiv from '../../complements/AnimatedDiv';
import './style.scss';

const Article = ({ totalToRender } = props) => (
  <AnimatedDiv className='blog__wrapper'>
    {totalToRender.map(({ link, img, title, time, paragraph }) => (
      <a href={link} target='__black' className='article' key={title}>
        <figure>
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
