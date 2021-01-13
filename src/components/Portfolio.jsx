import React from 'react';
import BtnFile from './BtnFile'
import ProjectBig from './ProjectBig';
import ProjectSmall from './ProjectSmall';

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h4>Some Things I’ve Built</h4>
      <div>
        <h5>Code</h5>
        <h5>UI/UX</h5>
        <h5>Designs</h5>
      </div>
      <BtnFile />
      <ProjectBig />
      <ProjectSmall />
    </section>
  )
}

export default Portfolio;
