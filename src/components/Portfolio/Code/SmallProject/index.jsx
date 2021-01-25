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
        <h3 className="projectSmall-title">Lorem ipsum</h3>
        <p className="projectSmall-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
        <ul className="projectSmall-stack">
          <li><span>Django</span></li>
          <li><span>Django</span></li>
          <li><span>Django</span></li>
        </ul>
      </div>
    </article>
  )
}

export default ProjectSmall;