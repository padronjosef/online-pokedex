import React, { useState } from 'react';
import DB from '../../DB';
import AnimatedDiv from '../complements/AnimatedDiv';
import StackLeft from './components/StackLeft';
import StackRight from './components/StackRight';
import './style.scss';

const Stack = () => {
  const { title, icons } = DB.stack;
  const [stack, setStack] = useState(icons[0]);
  const { name, img, p, link } = stack;

  return (
    <AnimatedDiv id='Stack' className='stack section'>
      <h2>{title}</h2>
      <div className='stack__wrapper'>
        <StackLeft handelOpen={setStack} />
        <StackRight name={name} img={img} p={p} link={link} />
      </div>
    </AnimatedDiv>
  );
};

export default Stack;
