import React, { useState } from 'react';
import Code from './Code';
import Uiux from './Uiux';
import Design from './Design';
import './style.scss';

const Switch = () => {
  const [show, setShow] = useState('Code');

  const renderSecction = (secction) => {
    setShow(secction);
  };

  return (
    <>
      <div className='switch'>
        <input className='switch__input' type='radio' id='Code' name='switchPortfolio' value='Code' defaultChecked />
        <label className='switch__label' onClick={() => renderSecction('Code')} htmlFor='Code'>
          Code
        </label>

        <input className='switch__input' type='radio' id='UI/UX' name='switchPortfolio' value='UI/UX' />
        <label className='switch__label' onClick={() => renderSecction('UI/UX')} htmlFor='UI/UX'>
          UI/UX
        </label>

        <input className='switch__input' type='radio' id='Designs' name='switchPortfolio' value='Designs' />
        <label className='switch__label' onClick={() => renderSecction('Designs')} htmlFor='Designs'>
          Designs
        </label>
      </div>
      {show === 'Code' && <Code />}
      {show === 'UI/UX' && <Uiux />}
      {show === 'Designs' && <Design />}
    </>
  );
};

export default Switch;
