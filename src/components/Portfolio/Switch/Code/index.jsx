import React from 'react';
import DB from '../../../../DB';
import './style.scss';

const Code = () => {
  return (
    <div className='projects__code' data-aos='zoom-in' data-aos-duration='1500' data-aos-mirror='true'>
      {DB.projects.slice(0, 5).map(({ name, demo, description, stack, img }) => (
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
    </div>
  );
};

export default Code;
