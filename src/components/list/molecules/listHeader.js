import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';

export function Header() {
  const { filds } = useContext(contextApi);
  return (
    <li className='list-header grid-rows highlight'>
      {filds.map(fild =>
        <p key={fild}>{fild}</p>
      )}
    </li>
  );
}
