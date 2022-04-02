import React from 'react';
import DB from '../../DB';
import { Animation } from '../helpers';
import './style.scss';

export function Main () {
  const { span, name, quote, message } = DB.main;

  return (
    <Animation id='Main' className='main section hero'>
      <div className='hero'>
        <span className='hero__span'>{span}</span>
        <h1 className='hero__title'>{name}</h1>
        <q className='hero__quote' cite={quote}>{quote}</q>
        <p className='hero__messege'>{message}</p>
      </div>
    </Animation>
  );
};
