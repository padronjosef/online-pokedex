import React from 'react';
import DB from '../../../DB';

const Summary = () => {
  const { title, name, description, footer, subTitle, storyLink, readHere } = DB.about.summary;

  return (
    <>
      <h2>{title}</h2>
      <div className='about__resume'>
        <p>{name}</p>
        <p>
          {description}
          <a target='_blank' rel='noreferrer' href={storyLink}>{readHere}</a>
        </p>
        <p>{footer}</p>
      </div>
      <h3>{subTitle}</h3>
    </>
  );
};

export default Summary;
