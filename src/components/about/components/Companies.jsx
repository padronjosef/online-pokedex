import React, { Fragment } from 'react';

export function Companies ({ experience }) {
  const { name, time, positions } = experience;

  return (
    <article className='company'>
      <h3 className='company__name'>{name}</h3>
      <time className='company__time'>{time}</time>
      {positions.map(({title, description}) => (
        <Fragment key={title}>
          <h4 className='company__job-title'>{title}</h4>
          <p className='company__job-description'>{description}</p>
        </Fragment>
      ))}
    </article>
  );
};
