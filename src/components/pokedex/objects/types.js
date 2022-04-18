import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { TypesIcon } from '../atoms';

export function Types() {
  const { types, activeType, effects: { handleChangeType } } = useContext(contextApi);

  return (
    <section className='pokedex__info highlight'>
      {types.map(type => (
        <div
          className={`types ${type.name === activeType ? 'types--active highlight' : ''}`}
          onClick={() => handleChangeType(type.name)}
          key={type.name}
        >
          <TypesIcon type={type} />
          <p className="types__text">{type.name}</p>
        </div>
      ))}
    </section>
  );
};
