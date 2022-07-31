import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'

export function Options() {
  const {
    options: { op_color, op_shiny, op_rotate, op_gender, op_units, op_view },
    effects: { handleOptions }
  } = useContext(contextApi)

  const buttons = [
    { state: "op_color", text: "color", active: op_color },
    { state: "op_shiny", text: "shiny", active: op_shiny },
    { state: "op_rotate", text: "rotate", active: op_rotate },
    { state: "op_gender", text: "gender", active: op_gender },
    { state: "op_units", text: op_units ? "imperial" : "metric", active: op_units },
    { state: "op_view", text: op_view ? "grid" : "list", active: op_view }
  ]

  const handleClick = (state, active) => () => handleOptions(state, !active)

  return (
    <div className='options stickers'>
      {buttons.map(({ state, text, active }) => (
        <button
          key={text}
          className={`options__btn highlight ${active ? "options__btn--active" : ''}`}
          onClick={handleClick(state, active)}
        >
          {text.toLocaleUpperCase()}
        </button>
      ))}
    </div>
  )
}
