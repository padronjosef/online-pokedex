import React from 'react';

import ProjectBig from './ProjectBig'
import ProjectSmall from './ProjectSmall'

import './style.css'

const Code = () =>
  <div className="code">
    < ProjectBig />
    < ProjectBig />
    <div className="code-small">
      < ProjectSmall />
      < ProjectSmall />
      < ProjectSmall />
    </div>
  </div>

export default Code
