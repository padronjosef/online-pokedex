import React from 'react';
import './style.scss';

const Main = () => (
  <main id='main' className='main' data-aos='zoom-in' data-aos-duration='1500' data-aos-mirror='true'>
    <div className='hero'>
      <div className='hero__wrapper'>
        <span className='hero__span'>hello, my name is</span>
        <h1 className='hero__title'>Jose Padron</h1>
        <q className='hero__quote' cite=''>
          Fake it until you make it
        </q>
        <p className='hero__messege'>
          Frontend Developer based in Bogota. CO.
          I Enjoy bulding web aplications, My goal is being a tech lead in web development.
        </p>
      </div>
    </div>
  </main>
);

export default Main;
