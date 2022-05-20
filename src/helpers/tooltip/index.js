import React from "react"
import { normalize } from "/src/helpers"
import './style.sass'

export function Tooltip({ children, text }) {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip__text">
        {normalize(text)}
      </span>
    </div>
  )
}

