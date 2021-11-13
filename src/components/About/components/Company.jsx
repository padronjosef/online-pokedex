import React from 'react';
import DB from '../../../DB';

const Companies = ({ jobIndex }) => {
  const job = DB.about.jobs[jobIndex];
  const { name, time, position, description } = job;

  return (
    <article className='company'>
      <h3 className='company__name'>{name}</h3>
      <time className='company__time'>{time}</time>
      <h4 className='company__job-title'>{position[0]}</h4>
      <p className='company__job-description'>{description[0]}</p>
      <h4 className='company__job-title'>{position[1]}</h4>
      <p className='company__job-description'>{description[1]}</p>
    </article>
  );
};

export default Companies;
