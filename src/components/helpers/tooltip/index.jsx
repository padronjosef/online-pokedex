import React from "react"
import './style.css'

export function Tooltip({ children, text }) {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip__text">
        {text}
      </span>
    </div>
  )
}
