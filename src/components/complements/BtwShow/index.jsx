import React from 'react';
import './style.scss';

const BtnShow = ({ minimun, total, value, onClick }) => (
  <button type='button' onClick={onClick} className='btn'>
    {total === minimun ? `View all the ${value}` : 'Show Less'}
  </button>
);

export default BtnShow;
