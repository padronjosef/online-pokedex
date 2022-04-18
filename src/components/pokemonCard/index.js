import React, { useEffect, useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Header, Slider, Info, Stats } from './molecules';
import { Spinner } from '/src/helpers';
import './style.sass';

export const PokemonCard = () => {
  const { evolutionChain, modalData, effects: { getEvolutions } } = useContext(contextApi);
  const { sprites, id, name, height, weight, species, abilities, types, forms, stats } = modalData
  const info = { id, height, weight, abilities, types, forms }

  useEffect(() => getEvolutions(species), [id])

  if (!modalData) return <Spinner />

  return (
    <div className='pokemonCard' >
      <Header name={name} />
      <div className='pokemonCard__main'>
        <Info info={info} />
        <Slider sprites={sprites} id={id} />
        <Stats stats={stats} />
      </div>
    </div >
  );
};
