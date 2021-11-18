import React from 'react';
import AnimatedDiv from '../../complements/AnimatedDiv';

const StackRight = ({ name, img, p, link }) => (
  <AnimatedDiv className='stack-right'>
    <dl className='stack-right__wrapper'>
      <dt className='stack-right__title'>{name}</dt>
      <img className='stack-right__img' src={img} alt={name} />
      <dd className='stack-right__details'>{p}</dd>
      <a className='stack-right__link' href={link} rel='noreferrer' target='_blank'>
        {`https://www.${name.toLowerCase()}.com`}
      </a>
    </dl>
  </AnimatedDiv>
);

export default StackRight;
