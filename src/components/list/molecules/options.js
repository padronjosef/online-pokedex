import React, { useContext } from 'react';
import { contextApi } from '/src/useContext';

export function Options() {
  const {
    options: { op_color, op_shiny, op_rotate, op_gender, op_units },
    effects: { handleOptions }
  } = useContext(contextApi);

  const buttons = [
    { state: "op_color", text: "color", active: op_color },
    { state: "op_shiny", text: "shiny", active: op_shiny },
    { state: "op_rotate", text: "rotate", active: op_rotate },
    { state: "op_gender", text: "gender", active: op_gender },
    { state: "op_units", text: op_units ? "imperial" : "metric", active: op_units },
  ]

  return (
    <div className='options'>
      {buttons.map(({ state, text, active }) => (
        <button
          key={text}
          className={`options__btn highlight ${active ? "options__btn--active" : ''}`}
          onClick={() => handleOptions(state, !active)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
