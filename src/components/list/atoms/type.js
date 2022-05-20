import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Tooltip, getAsset } from '/src/helpers';

export function Types({ types = [] }) {
  const { options: { op_color } } = useContext(contextApi);

  // const showShadow = op_color ? "highlight" : ''
  const showShadow = true ? "highlight" : ''

  return (
    <div className={`pokeitem__icons`}>
      {types.map(item => (
        <Tooltip text={item} key={item}>
          <img className={`pokeitem__icon ${showShadow}`} src={getAsset("types", item)} alt={item} />
        </Tooltip>
      ))}
    </div>
  );
}
