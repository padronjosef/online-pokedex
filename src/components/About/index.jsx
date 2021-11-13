import React, { useState } from 'react';
import DB from '../../DB';
import AnimatedDiv from '../complements/AnimatedDiv';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Company from './components/Company';
import './style.scss';

const About = () => {
  const [experience, setExperience] = useState(DB.about.workPlaces[0]);
  const jobIndex = DB.about.workPlaces.indexOf(experience);

  return (
    <AnimatedDiv id='About' className='about section'>
      <Summary />
      <div className='experience-wrapper'>
        <Experience setExperience={setExperience} />
        <Company jobIndex={jobIndex} />
      </div>
    </AnimatedDiv>
  );
};

export default About;
