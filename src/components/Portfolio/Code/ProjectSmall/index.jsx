import React from 'react'

import './style.css'

const ProjectSmall = () => {
  return (
    <article className="projectSmall">
      <div>
        <div className="projectSmall-icons">
          <img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-folder.svg" alt="folder icon"/>
          <div>
            <a href=""><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-github-projects.svg" alt=""/></a>
            <a href=""><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-external-link.svg" alt=""/></a>
          </div>
        </div>
        <h5>Lorem ipsum</h5>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
        <ul>
          <li>Django</li>
          <li>React</li>
          <li>GitHub Api</li>
        </ul>
      </div>
    </article>
  )
}

export default ProjectSmall;