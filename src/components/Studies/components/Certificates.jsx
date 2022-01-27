import React from 'react';
import AnimatedDiv from '../../complements/AnimatedDiv';

const Certificates = ({ certificate }) => (
  <AnimatedDiv className='courses'>
    {certificate.map(({ link, img, name, id }) => (
      <a key={id} className='certificate' target='__blank' href={link}>
        <img className='certificate__img' src={img} alt={name} />
        {/* <h3 className='certificate__name'>{name}</h3> */}
      </a>
    ))}
  </AnimatedDiv>
);

export default Certificates;
