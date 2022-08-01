import React, { useContext, Fragment } from 'react'
import { contextApi } from '/src/useContext'
import { normalize } from '/src/helpers'

export const MovesList = () => {
  const { cardData: { moves } } = useContext(contextApi)

  if (!moves.length) return

  const sortedMoves = moves.sort((a, b) => a.learnLvl - b.learnLvl)

  const eggMoves = sortedMoves.filter(item => item.learnMethod === 'egg')
  const tutorMoves = sortedMoves.filter(item => item.learnMethod === 'tutor')
  const machineMoves = sortedMoves.filter(item => item.learnMethod === 'machine')
  const levelMoves = sortedMoves.filter(item => item.learnMethod === 'level-up')

  const movesToRender = [
    { title: "Egg Moves", movesList: eggMoves },
    { title: "Level Up Moves", movesList: levelMoves },
    { title: "Tutor Moves", movesList: tutorMoves },
    { title: "Machine Moves", movesList: machineMoves }
  ]

  return (
    <div className='moveList'>
      {movesToRender.map(({ title, movesList }) => (
        <Fragment key={title}>
          {movesList.length > 0 && (
            <Fragment>
              <h3 className='moveList__tittle'>{title}</h3>
              <div className='moveList__wrapper' >
                {movesList.map(({ name, learnLvl, learnMethod }) => {
                  const byLvl = learnMethod === 'level-up'
                  const showLevel = learnLvl > 0 && <>{learnLvl} - </>
                  return (
                    <p key={name} className='moveList__item'>
                      {showLevel}
                      {normalize(name)}
                    </p>
                  )
                })}
              </div>
            </Fragment>
          )}
        </Fragment>
      ))}
    </div>
  )
}
