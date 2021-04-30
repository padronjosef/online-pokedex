import React from 'react';
import DB from '/src/DB';
import './style.scss';

const StackLeft = ({ handelOpen }) => (
  <div className='stack-left' data-aos='zoom-in' data-aos-duration='1500' data-aos-mirror='true'>
    {DB.stack.map((data) => (
      <figure className='stack-left__figure' key={data.name}>
        <img className='stack-left__img' onClick={() => handelOpen(data)} src={data.img} alt={data.name} />
      </figure>
    ))}
  </div>
);

export default StackLeft;
