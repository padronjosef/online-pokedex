import React, { useState } from 'react';
import DB from '../../DB';
import AnimatedDiv from '../complements/AnimatedDiv';
import BtnShow from '../complements/BtwShow';
import Certificates from './components/Certificates';
import './style.scss';

const Studies = () => {
  const { studies } = DB;
  const { certificates, title } = studies;

  const inititalState = studies.certificates.slice(0, 20);

  const [certificate, setCertificate] = useState(inititalState);

  const total = certificate.length;
  const minimum = inititalState.length;
  const allTheCertificates = certificates.length;

  const handleClick = () => (
    total === minimum ?
      setCertificate(certificates) :
      setCertificate(inititalState)
  );

  return (
    <AnimatedDiv id='Studies' className='section'>
      <h2>{title}</h2>
      <Certificates certificate={certificate} />
      <BtnShow
        minimun={minimum}
        total={total}
        value={`${allTheCertificates}`}
        onClick={handleClick}
      />
    </AnimatedDiv>
  );
};

export default Studies;
