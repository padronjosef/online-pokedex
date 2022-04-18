import React from 'react';
import { formatstat } from "/src/helpers";
import './style.sass';

export const ProgressBar = ({ name, value, pokemonType }) => {
  const pogress = (value / 200) * 100

  return (
    <div className='progress-bar' key={name} >
      <p className='progress-bar__text'>
        {formatstat(name) + ": "}
      </p>
      <div className='progress-bar__bar'>
        <div style={{ width: pogress + "%" }} className={`progress-bar__fill ${pokemonType}`} >
          <span className='progress-bar__value'>
            {value}
          </span>
        </div>
      </div>
    </div>
  )
};
