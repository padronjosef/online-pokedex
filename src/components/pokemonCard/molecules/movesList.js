import React, { useContext, useState, useEffect, Fragment } from 'react'
import { contextApi } from '/src/useContext'
import { MovesItems } from '../atoms'
import { normalize, getAsset } from '/src/helpers';

export const MovesList = () => {
  const { cardData } = useContext(contextApi)
  const { moves } = cardData

  if (!moves.length) return

  const categories = [...new Set([...moves.map(item => item.learnMethod)])].sort()
  console.log("🚀 ~ file: movesList.js ~ line 13 ~ MovesList ~ categories", categories)

  useEffect(() => { setActiveFilter(categories[0]) }, [cardData])

  const [activeFilter, setActiveFilter] = useState()

  const movesToRender = moves.filter(item => item.learnMethod === activeFilter)

  const handleClick = newMoveSet => () => setActiveFilter(newMoveSet)

  const moveDescription = {
    'egg': "Learn the following moves via breeding",
    'level-up': "Learn the following moves at the levels specified",
    'machine': "Is compatible with these Technical Machines",
    'tutor': "Can be taught these attacks from move tutors"
  }

  return (
    <div className='moveList'>
      <h3 className='moveList__tittle'>List of moves</h3>
      <div className='moveList__select'>
        {categories.map(item => {
          const isActive = activeFilter === item ? 'moveList__option--active' : ''
          return (
            <div onClick={handleClick(item)} key={item} className={`moveList__option ${isActive}`}>
              <img className='moveList__img' src={getAsset('moves', item)} alt={item} />
              <p>{normalize(item)}</p>
            </div>
          )
        })}
      </div>
      <h4 className='moveList__description'>{moveDescription[activeFilter]}</h4>
      <MovesItems toRender={movesToRender} description={moveDescription[activeFilter]} />
    </div >
  )
}
