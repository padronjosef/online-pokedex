import React from 'react';
import DB from '../../../DB';
import AnimatedDiv from '../../complements/AnimatedDiv';

const Design = () => {
  const { designs, behance, ViewMore } = DB.portfolio;
  return (
    <>
      <AnimatedDiv className='projects'>
        {designs.slice(0, 9).map(({ img, name }) => (
          <figure className='projects__figure' key={name}>
            <img className='projects__img' src={img} alt={name} />
          </figure>
        ))}
      </AnimatedDiv>
      <AnimatedDiv className='btn' href={behance} target='__black'>{ViewMore}</AnimatedDiv>
    </>
  );
};

export default Design;
