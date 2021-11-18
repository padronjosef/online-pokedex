import React, { Fragment, useState } from 'react';
import DB from '../../../DB';
import Code from './Code';
import Uiux from './Uiux';
import Design from './Design';

const Switch = () => {
  const [renderSecction, setRenderSecction] = useState('Code');
  const { sections } = DB.portfolio;

  return (
    <>
      <div className='switch'>
        {sections.map((section) => (
          <Fragment key={section}>
            <input className='switch__input' type='radio' id={section} name='switchPortfolio' value={section} defaultChecked={section === sections[0]} />
            <label className='switch__label' onClick={() => setRenderSecction(section)} htmlFor={section}>
              {section}
            </label>
          </Fragment>
        ))}
      </div>
      {renderSecction === 'Code' && <Code />}
      {renderSecction === 'UI/UX' && <Uiux />}
      {renderSecction === 'Designs' && <Design />}
    </>
  );
};

export default Switch;
