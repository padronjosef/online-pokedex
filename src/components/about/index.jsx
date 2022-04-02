import React, { useState } from 'react';
import { Animation } from '../helpers';
import { Experience, Companies } from './components';
import DB from '../../DB';
import './style.scss';

export function About () {
  const {summary, jobs} = DB.about
  const { title, name, description, footer, subTitle, storyLink, readHere } = summary;

  const [experience, setExperience] = useState(jobs[0]);

  return (
    <Animation id='About' className='about section'>
      <h2>{title}</h2>
      <div className='about__resume'>
        <p>{name}</p>
        <p>
          {description}
          <a target='_blank' rel='noreferrer' href={storyLink}>
            {readHere}
          </a>
        </p>
        <p>{footer}</p>
      </div>
      <h3>{subTitle}</h3>

      <div className='experience-wrapper'>
        <Experience setExperience={setExperience} />
        <Companies experience={experience} />
      </div>
    </Animation>
  );
};
