import React, { useState } from 'react';
import DB from '../../DB';
import { Animation } from '../helpers';
import { StackLeft, StackRight } from './components';
import './style.scss';

export function Stack () {
  const { title, icons } = DB.stack;
  const [stack, setStack] = useState(icons[0]);

  return (
    <Animation id='Stack' className='stack section'>
      <h2>{title}</h2>
      <div className='stack__wrapper'>
        <StackLeft handelOpen={setStack} />
        <StackRight tech={stack} />
      </div>
    </Animation>
  );
};
