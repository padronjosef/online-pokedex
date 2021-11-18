import React, { useState } from 'react';
import DB from '../../DB';
import AnimatedDiv from '../complements/AnimatedDiv';
import Article from './components/Article';
import BtnShow from '../complements/BtwShow';
import './style.scss';

const Blog = () => {
  const { blog } = DB;
  const inititalState = blog.articles.slice(0, 3);

  const [count, setCount] = useState(inititalState);

  const hadlerClick = () => (count.length === 3 ? setCount(blog.articles) : setCount(inititalState));

  return (
    <AnimatedDiv id='Blog' className='blog section'>
      <h2>{blog.title}</h2>
      <Article totalToRender={count} />
      <BtnShow minimun={3} total={count.length} value='articles' onClick={hadlerClick} />
    </AnimatedDiv>
  );
};

export default Blog;
