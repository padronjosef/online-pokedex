import React from 'react'
import { normalize } from '/src/helpers'

export const MovesItems = ({ toRender }) => {
  if (!toRender?.length) return

  return (
    <div className='moveList__wrapper' >
      {toRender?.map(({ name, learnLvl }) => {
        const showLevel = learnLvl > 0 && <>{learnLvl} - </>
        return (
          <p key={name} className='moveList__item'>
            {showLevel}
            {normalize(name)}
          </p>
        )
      })}
    </div>
  )
}
