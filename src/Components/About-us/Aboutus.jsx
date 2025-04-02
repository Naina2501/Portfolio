import React from 'react';
import Container from '../Container/Container';

const AboutUs = () => {
  return (
    <div className='mt-3'>
    <Container>
      <h1 className='Subtitle text-white text-4xl'>About Me</h1>
      <p>
        Hi! I'm <strong>Naina Bahuriya</strong>, a passionate web developer with a knack for building efficient, user-friendly, and visually appealing websites.
        I specialize in front-end and back-end development, turning creative ideas into functional digital solutions.
      </p>
      <h2 style={{ color: '#007acc' }}>My Journey</h2>
      <p>
        I started my journey as a curious learner who fell in love with coding. Over the years, I've honed my skills in technologies such as 
        HTML, CSS, JavaScript, React, Node.js, and more. I take pride in crafting applications that are fast, secure, and scalable.
      </p>
      <h2 style={{ color: '#007acc' }}>My Mission</h2>
      <p>
        I strive to create websites and applications that not only meet user needs but also provide an exceptional experience.
        My goal is to leverage my technical expertise to make a meaningful impact.
      </p>
      </Container>
     
    </div>
  );
};

export default AboutUs;