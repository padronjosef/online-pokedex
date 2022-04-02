import React from 'react';
import DB from '../../../DB';

export function Description () {
  const { span, title, message, cta } = DB.footer;

  return (
    <>
      <span className='footer__span'>{span}</span>
      <h2 className='footer__title'>{title}</h2>
      <p className='footer__messege'>{message}</p>
      <a className='footer__btn btn' href={`mailto:${DB.email}`}>{cta}</a>
    </>
  );
};
