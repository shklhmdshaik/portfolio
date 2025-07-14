import React from 'react';
import { Container } from 'react-bootstrap';

function Hero() {
  return (
    <section id="home" className="bg-primary text-white text-center py-5">
      <Container className="py-5">
        <h1 className="display-4">Shaik Shakeel Ahmed</h1>
        <p className="lead">React js Developer | Frontend Engineer | UI Developer</p>
      </Container>
    </section>
  );
}

export default Hero;