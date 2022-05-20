import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { ProgressBar } from "/src/helpers";

export const Stats = () => {
  const { cardData: { types, stats, power } } = useContext(contextApi);
  const type = types[0]

  return (
    <div className='pokemonCard__stats' >
      {stats.map(({ name, value }) => (
        <ProgressBar key={name} name={name} value={value} max={200} color={type} />
      ))}
      <p className='progress-bar__text'> total: {power} </p>
    </div >
  );
};
