import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Tooltip, getAsset } from '/src/helpers';

export function Types({ types = [] }) {
  const { showColors } = useContext(contextApi);
  const showShadow = showColors ? "highlight" : ''
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
