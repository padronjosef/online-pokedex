import React from 'react';
import AnimatedDiv from '../complements/AnimatedDiv';
import Description from './components/Description';
import SocialNetworks from './components/SocialNetworks';
import CopyWrite from './components/CopyWrite';
import './style.scss';

const Footer = () => (
  <AnimatedDiv id='Footer' className='footer'>
    <Description />
    <SocialNetworks />
    <CopyWrite />
  </AnimatedDiv>
);

export default Footer;
