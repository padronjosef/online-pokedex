import React from 'react';

import ProjectBig from './ProjectBig'
import ProjectSmall from './ProjectSmall'

import './style.css'

const Code = () =>
  <div className="code">
    <div className="code-big">
      < ProjectBig />
      < ProjectBig />
    </div>
    <div className="code-small">
      < ProjectSmall />
      < ProjectSmall />
      < ProjectSmall />
    </div>
  </div>

export default Code
