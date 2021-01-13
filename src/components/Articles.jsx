import React from 'react';
import Blogs from './Blogs';
import BtnShow from './BtnShow';

const Articles = () => {
  return (
    <section id="Articles">
      <h4>Things I've Written To The Internet</h4>
      <div>
        <Blogs />
      </div>
      <BtnShow />
    </section>
  )
}

export default Articles;
