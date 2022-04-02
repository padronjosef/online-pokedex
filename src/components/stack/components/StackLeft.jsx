import React from 'react';
import DB from '../../../DB';
import { Animation } from '../../helpers';

export function StackLeft ({ handelOpen }) {
  return (
    <Animation className='stack-left'>
      {DB.stack.icons.map((data) => (
        <figure className='stack-left__figure' key={data.name}>
          <img className='stack-left__img' onClick={() => handelOpen(data)} src={data.img} alt={data.name} />
        </figure>
      ))}
    </Animation>
  )
}
