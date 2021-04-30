import React from 'react';
import './style.scss';

const Article = ({ totalToRender } = props) => (
  <div
    className='blog__wrapper'
    data-aos='zoom-in'
    data-aos-duration='1500'
    data-aos-mirror='true'
  >
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
  </div>
);

export default Article;
