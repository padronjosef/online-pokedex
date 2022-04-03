import React from 'react';
import { Animation } from '../../helpers';

export function StackRight ({ tech }) {
  const { name, img, p, link } = tech

  return (
    <Animation className='stack-right'>
      <dl className='stack-right__wrapper'>
        <dt className='stack-right__title'>{name}</dt>
        <img className='stack-right__img' src={img} alt={name} />
        <dd className='stack-right__details'>{p}</dd>
        <a className='stack-right__link' href={link} rel='noreferrer' target='_blank'>
          {`https://www.${name.toLowerCase()}.com`}
        </a>
      </dl>
    </Animation>
  )
}