import React from 'react';
import DB from '../../../DB';
import AnimatedDiv from '../../complements/AnimatedDiv';

const Code = () => {
  const { projects } = DB.portfolio;
  const ExternalLinkIcon = 'https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/icon-external-link.svg';

  return (
    <AnimatedDiv className='projects__code'>
      {projects.slice(0, 5).map(({ name, demo, description, stack, img, github }) => (
        <a className='project' href={demo} target='__black' key={name}>
          <div className='project__details'>
            <div className='project__header'>
              <h3 className='project__title'>
                {name}
              </h3>
              <a href={github} target='__black' className='project__link'>
                <span>code</span>
                <img className='project__external-link-icon' src={ExternalLinkIcon} alt={github} />
              </a>
            </div>
            <div className='project__description'>
              <p className='project__paragraft'>{description}</p>
              <span className='project__stack'>{stack}</span>
            </div>
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
