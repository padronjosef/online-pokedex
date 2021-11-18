import React from 'react';
import DB from '../../../DB';
import AnimatedDiv from '../../complements/AnimatedDiv';

const Code = () => {
  const { projects } = DB.portfolio;

  return (
    <AnimatedDiv className='projects__code'>
      {projects.slice(0, 5).map(({ name, demo, description, stack, img }) => (
        <a className='project' href={demo} target='__black' key={name}>
          <div className='project__details'>
            <div className='project__header'>
              <h3 className='project__title'>
                {name}
              </h3>
            </div>
            <p className='project__description'>{description}</p>
            <span className='project__stack'>{stack}</span>
          </div>
          <figure className='project__figure'>
            <img className='project__img' src={img} alt={name} />
          </figure>
        </a>
      ))}
    </AnimatedDiv>
  );
};

export default Code;
