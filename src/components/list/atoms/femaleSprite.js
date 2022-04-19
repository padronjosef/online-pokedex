import React, { Fragment, useContext } from 'react';
import { contextApi } from '/src/useContext';

export function FemaleSprite({ sprite = false }) {
  const { options: { op_gender }, } = useContext(contextApi);

  return (
    <Fragment>
      {op_gender && sprite &&
        <span className='female__simbol'> &#9794; </span>
      }
    </Fragment>
  );
}
