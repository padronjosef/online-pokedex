import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';

export function Filters() {
  const { FILTERS } = useContext(contextApi);

  return (
    <section className='pokedex__info highlight'>
      <div className='filters__header highlight'>
        Order by
      </div>
      {FILTERS.map(filter => (
        <div className='filters' key={filter}>
          <p className='filters__text'>{filter}</p>
          <input
            className='filters__input highlight'
            placeholder={filter}
            type="number"
          />
        </div>
      ))}
      <div className='filters__wrapper'>
        <button className='filters__button highlight'>Apply Filters</button>
      </div>
    </section>
  );
};
