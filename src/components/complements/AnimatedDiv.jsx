import React from 'react';

const AnimatedDiv = ({ id, className, children, href }) => {
  if (href) (
    <a id={id} href={href} className={className} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
  return (
    <div id={id} className={className} data-aos='zoom-in' data-aos-duration='1500' data-aos-mirror='true'>
      {children}
    </div>
  );
};

export default AnimatedDiv;
