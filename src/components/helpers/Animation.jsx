import React from 'react';

export function Animation ({ id = 0, className = '', children, href='' }) {
  if (href) (
    <a id={id} href={href} className={className} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
  return (
    <div id={id} className={className} data-aos='zoom-in' data-aos-duration='1500' data-aos-mirror='true'>
      {children}
    </div>
  )
}

