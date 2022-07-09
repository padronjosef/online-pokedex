import React, { useContext } from 'react'
import { contextApi } from '/src/useContext'
import { Tooltip, getAsset } from '/src/helpers'

export function Stats({ stats = [] }) {
  const { isMobile, options: { op_color }, } = useContext(contextApi)
  const showShadow = op_color ? "color-white" : ''

  return (
    <div className='stats'>
      {stats.map(({ name, value }) => 
          <Tooltip text={name} key={name}>
            <img className="stats__img" src={getAsset("stats", name + '-white')} alt={name} />
            <p className={`stats__text ${showShadow}`}>{value}</p>
          </Tooltip>
        )
      }
    </div>
  )
}
