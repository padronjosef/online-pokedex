import React from 'react';
import './style.scss'

export function BurgerBtn ({toogleHeader}) {
  return (
    <button type='button' className='hamburger' id='hamburger' onClick={toogleHeader}>
      <div className='hamburger__div' />
      <div className='hamburger__div' />
      <div className='hamburger__div' />
    </button>
  );
};
