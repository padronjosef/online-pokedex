import React from 'react';
import { Animation } from '../helpers';
import { Description, SocialNetworks, CopyWrite } from './components';
import './style.scss';

export function Footer () {
  return (
    <div className='background-div'>
      <Animation id='Footer' className='footer'>
        <Description />
        <SocialNetworks />
        <CopyWrite />
      </Animation>
    </div>
  );
}