import React from 'react';
import DB from '../../../DB';

const CopyWrite = () => {
  const { logo } = DB.header;

  return (
    <div className='copy-write'>
      <p className='copy-write__message'>&copy; Made with &#x1F90D; by</p>
      <img className='copy-write__img' src={logo.img} alt={logo.alt} />
    </div>
  );
};

export default CopyWrite;
