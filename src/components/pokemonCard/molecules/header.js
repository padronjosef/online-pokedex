import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import back from '/src/assets/back.svg'
import { normalize } from '/src/helpers';

export const Header = () => {
  const { cardData, effects: { closeCard } } = useContext(contextApi);
  const { name, types, subTitle } = cardData
  const type = types[0]

  return (
    <div className='pokemonCard__header' >
      <img
        className={`pokemonCard__back highlight ${type}`}
        onClick={closeCard}
        src={back}
      />
      <div className='pokemonCard__title-wrapper'>
        <p className='pokemonCard__title'>
          {normalize(name)}
        </p>
        <p className={`highlight pokemonCard__sub-title ${type}`} >
          {subTitle}
        </p>
      </div>
    </div>
  );
};
