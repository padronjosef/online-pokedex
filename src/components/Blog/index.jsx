import React, { useState } from 'react';
import DB from '../../DB';
import AnimatedDiv from '../complements/AnimatedDiv';
import Article from './components/Article';
import BtnShow from '../complements/BtwShow';
import './style.scss';

const Blog = () => {
  const { blog: {title, articles} } = DB;
  const innerWidth = window.innerWidth > 768;
  const blogArtciles = articles;

  const articlesToRender = innerWidth ? blogArtciles.slice(0, 3) : blogArtciles.slice(0, -1);
  const inititalState = articlesToRender;

  const [count, setCount] = useState(inititalState);

  const total = count.length;
  const minimum = inititalState.length;

  const hadlerClick = () => total === minimum ? setCount(blogArtciles) : setCount(inititalState)

  return (
    <AnimatedDiv id='Blog' className='blog section'>
      <h2>{title}</h2>
      <Article totalToRender={count} />
      {innerWidth && (
        <BtnShow
          minimun={3}
          total={total}
          value='articles'
          onClick={hadlerClick}
        />
      )}
    </AnimatedDiv>
  );
};

export default Blog;
