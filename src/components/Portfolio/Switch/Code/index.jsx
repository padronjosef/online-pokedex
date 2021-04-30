import React from 'react';
import DB from '/src/DB';
import './style.scss';

const Code = () => {
  const iconProjects = 'https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-github-projects.svg';
  const iconLink = 'https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-external-link.svg';

  return (
    <div className='projects__code' data-aos='zoom-in' data-aos-duration='1500' data-aos-mirror='true'>
      {DB.projects.slice(0, 5).map(({ name, github, demo, description, stack, img }, index) => (
        <article className='project' key={index}>
          <div className='project__details'>
            <div className='project__header'>
              <h3 className='project__title'>{name}</h3>
              <div className='project__links'>
                <a className='project__link' href={github} target='__black'>
                  <img src={iconProjects} alt='link to repo' />
                </a>
                <a className='project__link' href={demo} target='__black'>
                  <img src={iconLink} alt='like to live demo' />
                </a>
              </div>
            </div>
            <p className='project__description'>{description}</p>
            <span>{stack}</span>
          </div>
          <a className='project__figure' href={demo} target='__black'>
            <img className='project__img' src={img} alt={name} />
          </a>
        </article>
      ))}
    </div>
  );
};

export default Code;
