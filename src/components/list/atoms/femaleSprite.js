import React, { Fragment, useContext } from 'react';
import { contextApi } from '/src/useContext';

export function FemaleSprite({ sprite = false }) {
  const { showGenders } = useContext(contextApi);

  return (
    <Fragment>
      {showGenders && sprite &&
        <span className='sprites__female'> &#9794; </span>
      }
    </Fragment>
  );
}
