import React from 'react';
import DB from '../../DB';
import AnimatedDiv from '../complements/AnimatedDiv';
import Switch from './components/Switch';
import './style.scss';

const Portfolio = () => {
  const { title } = DB.portfolio;

  return (
    <AnimatedDiv id='Portfolio' className='portfolio section'>
      <h2>{title}</h2>
      <Switch />
    </AnimatedDiv>
  );
};

export default Portfolio;
