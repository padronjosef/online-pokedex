import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { ProgressBar } from "/src/helpers";

export const Stats = () => {
  const { cardData: { type, stats, power } } = useContext(contextApi);

  return (
    <div className='pokemonCard__stats' >
      {stats.map(({ stat: { name }, base_stat }) => (
        <ProgressBar key={name} name={name} value={base_stat} max={200} color={type} />
      ))}
      <p className='progress-bar__text'> total: {power} </p>
    </div >
  );
};
