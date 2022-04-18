import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';

export function Options() {
  const { showShiny, showGenders, showFront, toogleUnits, effects, showColors } = useContext(contextApi);
  const { setShowShiny, setShowGenders, setShowFront, setToogleUnits, setShowColors } = effects

  const buttons = [
    {
      text: "Colors",
      logic: () => setShowColors(!showColors),
      active: showColors
    },
    {
      text: "Shinny",
      logic: () => setShowShiny(!showShiny),
      active: showShiny
    },
    {
      text: "Rotate",
      logic: () => setShowFront(!showFront),
      active: !showFront
    },
    {
      text: showGenders ? "Female" : "Male",
      logic: () => setShowGenders(!showGenders),
      active: showGenders
    },
    {
      text: toogleUnits ? "Metric" : "Imperial",
      logic: () => setToogleUnits(!toogleUnits),
      active: !toogleUnits
    },
  ]

  return (
    <div className='options'>
      {buttons.map(({ text, logic, active }) => (
        <button
          className={`options__btn highlight ${active ? "options__btn--active" : ''}`}
          onClick={logic} key={text}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
