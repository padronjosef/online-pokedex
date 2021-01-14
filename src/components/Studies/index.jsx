import React from 'react';
import BtnFile from '../complements/BtnFile/';
import BtnShow from '../complements/BtwShow';

import Course from './Course';

const Studies = () =>
  <section id="Studies">
    <h4>Everything I have learned</h4>
    <BtnFile />
    <div>
      <Course />
    </div>
    <BtnShow />
  </section>

export default Studies;
