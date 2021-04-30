import React, { useState } from 'react';
import StackLeft from './StackLeft';
import StackRight from './StackRight';
import DB from '/src/DB';
import './style.scss';

const Stack = () => {
  const { stack } = DB;

  const [showStack, setShowStack] = useState(stack[0]);

  const { name, img, p, link } = showStack;

  return (
    <section
      id='stack'
      className='stack'
      data-aos='fade-up'
      data-aos-duration='1500'
      data-aos-mirror='true'
    >
      <h2>All the technologies I&apos;ve use</h2>
      <div className='stack__wrapper'>
        <StackLeft handelOpen={setShowStack} />
        <StackRight name={name} img={img} p={p} link={link} />
      </div>
    </section>
  );
};

export default Stack;
