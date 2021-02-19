import React from 'react';
import assets from "/src/containers/assets/assets";

import './style.scss'

const Code = () => (
  <div className="projects__code" data-aos="zoom-in" data-aos-duration="1500" data-aos-mirror="true">
    {assets.projects.map((data, index) => {
      return (
        <article className="project" key={`data-${index}`}>
          <div className="project__details">
            <div className="project__header">
              <h3 className="project__title">{data.name}</h3>
              <div className="project__links">
                <a className="project__link" href={data.github} target="__black"><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-github-projects.svg" alt="link to repo"/></a>
                <a className="project__link" href={data.demo} target="__black"><img src="https://raw.githubusercontent.com/padronjosef/Icon-Portfolio-react/3b9cadea124e6438ca1f3554f966e6d27bc48989/icon-external-link.svg" alt="like to live demo"/></a>
              </div>
            </div>
            <p className="project__description">{data.description}</p>
            <span>{data.stack}</span>
          </div>
          <figure className="project__figure">
            <img className="project__img" src={data.img} alt={data.name}/>
          </figure>
        </article>
      );
    })}
  </div>
);

export default Code;
