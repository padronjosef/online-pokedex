import React from 'react';
import AnimatedDiv from '../../complements/AnimatedDiv';
import DB from '../../../DB';

const Uiux = () => {
  const { uxix } = DB.portfolio;

  return (
    <AnimatedDiv className='projects'>
      {uxix.slice(0, 5).map(({ link, img, name }) => (
        <a className='projects__figure' href={link} target='__black' key={name}>
          <img className='projects__img' src={img} alt={name} />
        </a>
      ))}
    </AnimatedDiv>
  );
};

export default Uiux;
