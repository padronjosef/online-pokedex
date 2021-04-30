import React from 'react';
import './style.scss';

const Certificates = ({ totalToRender }) => (
  <div
    className='courses'
    data-aos='zoom-in'
    data-aos-duration='1500'
    data-aos-mirror='true'
  >
    {totalToRender.map(({ link, img, name, id }) => (
      <a className='certificate' target='__blank' href={link} key={id}>
        <img className='certificate__img' src={img} alt={name} />
        <h3 className='certificate__name'>{name}</h3>
      </a>
    ))}
  </div>
);

export default Certificates;
