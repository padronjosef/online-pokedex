import React from 'react';
import './style.scss';

export function BtnShow ({ minimun, total, value, onClick }) {
  return (
    <button type='button' onClick={onClick} className='btn'>
      {total === minimun ? `View all the ${value}` : 'Show Less'}
    </button>
  )
}