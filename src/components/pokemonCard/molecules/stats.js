import React, { useContext } from 'react';
import { ProgressBar } from "/src/helpers";
import { contextApi } from '/src/useContext';

export const Stats = ({ stats }) => {
  const total = stats.reduce((acum, value) => acum + value.base_stat, 0)
  const { pokemonType } = useContext(contextApi);

  return (
    <div className='pokemonCard__stats' >
      {stats.map(({ stat: { name }, base_stat }) => {
        return (
          <ProgressBar name={name} value={base_stat} pokemonType={pokemonType} />
        )
      })}
      <p className='progress-bar__text'> total: {total} </p>
    </div >
  );
};
