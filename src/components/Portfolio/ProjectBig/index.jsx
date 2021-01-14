import React from 'react'

import iconGitHubProject from '../assets/icon-github-projects.svg'
import iconExternalLink from '../assets/icon-external-link.svg'
import imgProject from '../assets/img-project.png'

const ProjectBig = () => {
  return (
    <article>
      <div>
        <div>
          <div>
            <span>Feature Project</span>
            <h5>Project Name</h5>
          </div>
          <div>
            <a href=""><img src={iconGitHubProject} alt=""/></a>
            <a href=""><img src={iconExternalLink} alt=""/></a>
          </div>
        </div>
        <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for.</p>
        <ul>
          <li>Stack</li>
          <li>Stack</li>
          <li>Stack</li>
        </ul>
      </div>
      <figure>
        <img src={imgProject} alt=""/>
      </figure>
    </article>
  )
}

export default ProjectBig;