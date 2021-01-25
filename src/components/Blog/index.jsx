import React from 'react';
import Article from './Article';
import BtnShow from '../complements/BtwShow';

import './style.css'

const Blog = () =>
  <section id="blog" className="articles">
    <h2><span>04.</span> Things I've Written To The Internet</h2>
    <div className="blogs-container">
      <Article />
      <Article />
      <Article />
    </div>
    <BtnShow value="articles"/>
  </section>

export default Blog;
