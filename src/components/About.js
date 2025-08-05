import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="container max-w-90 about-setion">

      <h2 className='text-2xl font-bold mb-6'>About Me</h2>
      <div className="p-4 shadow py-2 my-2 max-w-90">
        <p>Front End Developer with over 5 years of hands-on experience in building responsive, user-friendly, and scalable web applications using HTML5, CSS3, ReactJS, JavaScript, and jQuery. Passionate about creating seamless user experiences and clean, maintainable code.

          Proven ability to quickly adapt to new technologies and development environments. Experienced in working in Agile/Scrum teams, contributing effectively to all phases of the development lifecycle. Strong communication and collaboration skills with a focus on continuous improvement and learning.

          Always eager to take on new challenges, innovate, and deliver high-quality front-end solutions that drive business impact.</p>
      </div>
    </section>
  );
}

export default About;