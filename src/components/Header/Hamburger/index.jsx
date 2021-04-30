import React from 'react';
import closeMenu from '/src/components/complements/CloseMenu';
import './style.scss';

const Hamburger = () => {
  return (
    <div className='hamburger' id='hamburger' onClick={closeMenu}>
      <div className='hamburger__div' />
      <div className='hamburger__div' />
      <div className='hamburger__div' />
    </div>
  );
};

export default Hamburger;
