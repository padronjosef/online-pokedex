import React from 'react';
import BtnFile from './BtnFile';
import Course from './Course';
import BtnShow from './BtnShow';

const Studies = () => {
  return (
    <section id="Studies">
      <h4>Everything I have learned</h4>
      <BtnFile />
      <div>
        <Course />
      </div>
      <BtnShow />
    </section>
  )
}

export default Studies;
