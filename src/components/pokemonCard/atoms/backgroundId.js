import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'

export const BackgroundId = () => {
  const { cardData: { id } } = useContext(contextApi)

  const idLength = () => {
    const digits = id.toString().length
    if (digits >= 4) return "slider__id--reduce1"
    if (digits >= 3) return "slider__id--reduce2"
    if (digits >= 2) return "slider__id--reduce3"
    return ''
  }

  return (
    <div className={`slider__id ${idLength()}`} >
      #{id}
    </div>
  )
}
