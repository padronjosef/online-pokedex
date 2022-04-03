import React from 'react';
import './style.scss'

export function BurgerBtn ({showHeader, toogleHeader}) {
  const active = showHeader ? 'hamburger--is-active' : ''
  return (
    <button type='button' className={`hamburger ${active}`} id='hamburger' onClick={toogleHeader}>
      <div className='hamburger__div' />
      <div className='hamburger__div' />
      <div className='hamburger__div' />
    </button>
  );
};
