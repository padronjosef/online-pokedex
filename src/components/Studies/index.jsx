import React, { useState } from 'react';
import DB from '../../DB';
import AnimatedDiv from '../complements/AnimatedDiv';
import BtnShow from '../complements/BtwShow';
import Certificates from './components/Certificates';
import './style.scss';

const Studies = () => {
  const { studies } = DB;
  const { certificates, title } = studies;
  const inititalState = studies.certificates.slice(0, 6);

  const [certificate, setCertificate] = useState(inititalState);

  const handleClick = () => (certificate.length === 6 ? setCertificate(certificates) : setCertificate(inititalState));

  return (
    <AnimatedDiv id='Studies' className='section'>
      <h2>{title}</h2>
      <Certificates certificate={certificate} />
      <BtnShow
        minimun={6}
        total={certificate.length}
        value={`${certificates.length}`}
        onClick={handleClick}
      />
    </AnimatedDiv>
  );
};

export default Studies;
