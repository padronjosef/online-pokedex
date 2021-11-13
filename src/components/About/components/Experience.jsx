import React, { Fragment } from 'react';
import DB from '../../../DB';

const Experience = ({ setExperience }) => (
  <div className='experience'>
    { DB.about.workPlaces.map((job) => (
      <Fragment key={job}>
        <input
          className='experience__input'
          type='radio'
          id={job}
          name='switchExperience'
          value={job}
          defaultChecked={job === DB.about.workPlaces[0]}
        />
        <label
          className='experience__label'
          onClick={() => setExperience(job)}
          htmlFor={job}
        >
          {job}
        </label>
      </Fragment>
    ))}
  </div>
);

export default Experience;
