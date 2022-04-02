import React from 'react';
import DB from '../../../DB';
import { Animation } from '../../helpers/Animation';

function Code () {
  const { projects } = DB.portfolio;
  const ExternalLinkIcon = 'https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/icon-external-link.svg';

  return (
    <Animation className='projects__code'>
      {projects.slice(0, 5).map(({ name, demo, description, stack, img, github }) => (
        <div className='project' key={name}>
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
          <a className='project__figure' href={demo} target='__black'>
            <img className='project__img' src={img} alt={name} />
          </a>
        </div>
      ))}
    </Animation>
  );
};

export default Code;
