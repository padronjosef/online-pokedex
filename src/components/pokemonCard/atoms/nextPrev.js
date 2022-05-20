import React from 'react'

export const NextPrev = ({ icon, onClick }) => {
  return (
    <div className='slider__edges' onClick={onClick}>
      <button className='slider__btn highlight' >
        {icon}
      </button>
    </div>
  )
}
