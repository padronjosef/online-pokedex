import React from 'react';
import DB from '../../DB';
import AnimatedDiv from '../complements/AnimatedDiv';
import './style.scss';

const Main = () => {
  const { span, name, quote, message } = DB.main;

  return (
    <AnimatedDiv id='Main' className='main section'>
      <div className='hero'>
        <span className='hero__span'>{span}</span>
        <h1 className='hero__title'>{name}</h1>
        <q className='hero__quote' cite=''>{quote}</q>
        <p className='hero__messege'>{message}</p>
      </div>
    </AnimatedDiv>
  );
};

export default Main;
