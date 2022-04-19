import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import { Spinner } from "/src/helpers";
import { Header, Slider, Info, Stats } from './molecules';
import './style.sass';

export const PokemonCard = () => {
  const { cardData } = useContext(contextApi);
  
  if (!cardData) return <Spinner />

  return (
    <div className='pokemonCard' >
      <Header />
      <div className='pokemonCard__main'>
        <Info />
        <Slider />
        <Stats />
      </div>
    </div >
  );
};
