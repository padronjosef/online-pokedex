import React, { useState } from 'react';
import AnimatedDiv from '../complements/AnimatedDiv';
import Experience from './components/Experience';
import Company from './components/Company';
import DB from '../../DB';
import './style.scss';

const About = () => {
  const {summary, jobs} = DB.about
  const { title, name, description, footer, subTitle, storyLink, readHere } = summary;

  const [experience, setExperience] = useState(jobs[0]);

  return (
    <AnimatedDiv id='About' className='about section'>
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
        <Company experience={experience} />
      </div>
    </AnimatedDiv>
  );
};

export default About;
