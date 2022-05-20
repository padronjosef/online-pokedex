import React from 'react'
import { normalize } from "/src/helpers"
import './style.sass'

export const ProgressBar = ({
  name = "",
  value = 0,
  max = 100,
  color = ""
}) => {
  const pogress = (value / max) * 100

  return (
    <div className='progress-bar' >
      <p className='progress-bar__text'>
        {normalize(name) + ": "}
      </p>
      <div className='progress-bar__bar'>
        <div
          className={`progress-bar__fill ${color}`}
          style={{ width: pogress + "%" }}
        >
          <span className='progress-bar__value'>
            {value}
          </span>
        </div>
      </div>
    </div>
  )
}
