import React, { useState } from 'react';
import Platzi from './Platzi';
import SistemaC3 from './SistemaC3';
import GdenTechnology from './GdenTechnology';
import Sericincol from './Sericincol';
import './style.scss';

const About = () => {
  const [experience, setExperience] = useState('Platzi');

  return (
    <section className='about' id='about'>
      <h2>A short summary about me</h2>
      <div className='about__resume'>
        <p>Hello there! I&apos;m Jose, a Frontend Developer based in Bogota. CO.</p>
        <p>
          I Enjoy bulding web aplications, My goal is being a tech lead in web development. Shortly after I finished my electronic engineering career, I started my journey in the tech industry having some failures and much more accomplishments,
          <a target='_blank' rel='noreferrer' href='https://platzi.com/blog/mi-camino-a-platzi/'> you can read my story here.</a>
        </p>
        <p>But always working hard to constantly better myself and write great code. I&apos;m a space and videogame fanatic, a retired pianist, a PC hardware lover and meme maker.</p>
      </div>
      <h3>This is where I&apos;ve worked</h3>
      <div className='experience-wrapper'>
        <div className='experience'>
          <input className='experience__input' type='radio' id='Platzi' name='switchExperience' value='Platzi' defaultChecked />
          <label className='experience__label' onClick={() => setExperience('Platzi')} htmlFor='Platzi'>Platzi</label>

          <input className='experience__input' type='radio' id='SistemaC3' name='switchExperience' value='SistemaC3' />
          <label className='experience__label' onClick={() => setExperience('SistemaC3')} htmlFor='SistemaC3'>Sistema C3</label>

          <input className='experience__input' type='radio' id='GdenTechnology' name='switchExperience' value='GdenTechnology' />
          <label className='experience__label' onClick={() => setExperience('GdenTechnology')} htmlFor='GdenTechnology'>Gden Technology</label>

          <input className='experience__input' type='radio' id='Sericincol' name='switchExperience' value='Sericincol' />
          <label className='experience__label' onClick={() => setExperience('Sericincol')} htmlFor='Sericincol'>Sericincol</label>
        </div>
        <article className='company'>
          {experience === 'Platzi' && <Platzi />}
          {experience === 'SistemaC3' && <SistemaC3 />}
          {experience === 'GdenTechnology' && <GdenTechnology />}
          {experience === 'Sericincol' && <Sericincol />}
        </article>
      </div>
    </section>
  );
};

export default About;
