import React, {Fragment, useState, lazy, Suspense } from 'react';
import AnimatedDiv from '../complements/AnimatedDiv';
import DB from '../../DB';
import './style.scss';

const Portfolio = () => {
  const [renderSecction, setRenderSecction] = useState('Code');
  const { title, sections } = DB.portfolio;

  const lazySections = {
    'Code': lazy(() => import('./components/Code')),
    'UI/UX': lazy(() => import('./components/Uiux')),
    'Designs': lazy(() => import('./components/Design'))
  }

  const ToRender = lazySections[renderSecction]

  return (
    <AnimatedDiv id='Portfolio' className='portfolio section'>
      <h2>{title}</h2>

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

      <Suspense
        fallback={
          <span>Loading...</span>
        }
      >
        <ToRender />
      </Suspense>
    </AnimatedDiv>
  );
};

export default Portfolio;
