import React from 'react';
import './style.scss';

const BtnShow = ({ minimun, total, value, onClick }) => (
  <a onClick={onClick} className='btn'>
    {total === minimun ? `View all the ${value}` : 'Show Less'}
  </a>
);

export default BtnShow;
