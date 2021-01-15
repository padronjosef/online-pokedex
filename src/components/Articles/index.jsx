import React from 'react';
import Blogs from './Blogs';
import BtnShow from '../complements/BtwShow';

import './style.css'

const Articles = () =>
  <section id="Articles" className="articles">
    <h4>Things I've Written To The Internet</h4>
    <div className="blogs-container">
      <Blogs />
      <Blogs />
      <Blogs />
    </div>
    <BtnShow />
  </section>

export default Articles;
