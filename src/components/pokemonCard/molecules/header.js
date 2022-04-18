import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';
import back from '/src/assets/back.svg'

export const Header = ({ name }) => {
  const { subStitle, pokemonType, effects: { closeModal } } = useContext(contextApi);

  return (
    <div className='pokemonCard__header' >
      <img className={`pokemonCard__back highlight ${pokemonType}`} onClick={closeModal} src={back} />
      <div className='pokemonCard__title-wrapper'>
        <p className='pokemonCard__title'>{name.split("-").join(" ")}</p>
        <p className={`highlight pokemonCard__sub-title ${pokemonType}`}>{subStitle}</p>
      </div>
    </div >
  );
};
