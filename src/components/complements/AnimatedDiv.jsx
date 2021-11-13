import React from 'react';

const AnimatedDiv = ({ id, className, children }) => (
  <div id={id} className={className} data-aos='zoom-in' data-aos-duration='1500' data-aos-mirror='true'>
    {children}
  </div>
);

export default AnimatedDiv;
