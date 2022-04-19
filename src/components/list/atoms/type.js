import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Tooltip, getAsset } from '/src/helpers';

export function Types({ types = [] }) {
  const { options: { op_color } } = useContext(contextApi);

  // const showShadow = op_color ? "highlight" : ''
  const showShadow = true ? "highlight" : ''

  return (
    <div className={`pokeitem__icons`}>
      {types.map(({ type: { name } }) => (
        <Tooltip text={name} key={name}>
          <img className={`pokeitem__icon ${showShadow}`} src={getAsset("types", name)} alt={name} />
        </Tooltip>
      ))}
    </div>
  );
}
