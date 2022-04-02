import React, { Fragment } from 'react';
import DB from '../../../DB';

export function Experience ({ setExperience }) {
  const { jobs } = DB.about

  const handleClick = item => () => setExperience(item)

  return (
    <div className='experience'>
      {jobs.map((item) => {
        const { name } = item
        return (
          <Fragment key={name}>
            <input
              className='experience__input'
              type='radio'
              id={name}
              name='switchExperience'
              value={name}
              defaultChecked={name === jobs[0].name}
            />
            <label className='experience__label' onClick={handleClick(item)} htmlFor={name} >
              {name}
            </label>
          </Fragment>
        )
      })}
    </div>
  );
};
