import React from 'react'

import './style.css'

const ProjectSmall = () => {
  return (
    <article className="small-project">
      <div>
        <div className="small-project__assets">
          <img className="small-project__folder" src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-folder.svg" alt="folder icon"/>
          <div>
            <a className="small-project__link" href=""><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-github-projects.svg" alt=""/></a>
            <a className="small-project__link" href=""><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-external-link.svg" alt=""/></a>
          </div>
        </div>
        <h3 className="small-project__title">Lorem ipsum</h3>
        <p className="small-project__description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
        <ul className="small-project__stack">
          <li><span className="small-project__span">Django</span></li>
          <li><span className="small-project__span">Django</span></li>
          <li><span className="small-project__span">Django</span></li>
        </ul>
      </div>
    </article>
  )
}

export default ProjectSmall;