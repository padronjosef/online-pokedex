import React from 'react'
import { Animation, Tooltip } from '../../helpers'

export function Certificates ({ certificate }) {
  return (
    <Animation className='courses'>
      {certificate.map(({ link, img, name, id }) => (
        <Tooltip  key={id} text={name}>
          <a className='certificate' target='__blank' href={link}>
            <img className='certificate__img' src={img} alt={name} />
          </a>
        </Tooltip>
      ))}
    </Animation>
  )
}
