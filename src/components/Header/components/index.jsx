import React from 'react';
import togleMobileMenu from '../../complements/togleMobileMenu';
import './style.scss';

const Hamburger = () => (
  <button type='button' className='hamburger' id='hamburger' onClick={togleMobileMenu}>
    <div className='hamburger__div' />
    <div className='hamburger__div' />
    <div className='hamburger__div' />
  </button>
);

export default Hamburger;
