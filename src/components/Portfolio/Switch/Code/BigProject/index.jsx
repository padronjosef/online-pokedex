import React from 'react'

import './style.css'

const ProjectBig = () => {
  return (
    <article className="big-project">
      <div className="big-project__wrapper">
        <div className="big-project__details">
          <h3 className="big-project__title">Project Name</h3>
          <div>
            <a className="big-project__link" href=""><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-github-projects.svg" alt="link to repo"/></a>
            <a className="big-project__link" href=""><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-external-link.svg" alt="like to live demo"/></a>
          </div>
        </div>
        <p className="big-project__description">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for.</p>
        <ul>
          <li className="big-project__item"><span>Stack</span></li>
          <li className="big-project__item"><span>Stack</span></li>
          <li className="big-project__item"><span>Stack</span></li>
        </ul>
      </div>
      <figure className="big-project__figure">
        <img className="big-project__img" src="https://raw.githubusercontent.com/padronjosef/Portfolio-Assets/main/img-project.webp" alt="project image"/>
      </figure>
    </article>
  )
}

export default ProjectBig;