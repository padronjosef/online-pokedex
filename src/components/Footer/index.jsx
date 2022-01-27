import React from 'react';
import AnimatedDiv from '../complements/AnimatedDiv';
import Description from './components/Description';
import SocialNetworks from './components/SocialNetworks';
import CopyWrite from './components/CopyWrite';
import './style.scss';

const Footer = () => (
  <div className='background-div'>
    <AnimatedDiv id='Footer' className='footer'>
      <Description />
      <SocialNetworks />
      <CopyWrite />
    </AnimatedDiv>
  </div>
);

export default Footer;
