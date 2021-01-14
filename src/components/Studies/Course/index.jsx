import React from 'react';
import badgeCourse from '../assets/badge-course.svg'

import './style.css'

const Course = () => {
  return (
    <article className="course">
      <img src={badgeCourse} alt=""/>
      <p>Frontend Architecture</p>
    </article>
  )
}

export default Course;