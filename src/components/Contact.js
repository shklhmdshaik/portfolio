import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact" className="container max-w-90">
      <h2>Contact Me</h2>
      <Container className='shadow py-2 my-2  text-center'>
        <p>Mob.No: 971 581683831</p>
        <p>Email: shklhmdshaik@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/shakeel-ahmed-8aab09197/">linkedin.com/in/shakeel</a></p>
        <p>Github: <a href="https://github.com/shklhmdshaik">github.com/in/shakeel</a></p>
      </Container>
    </section>
  );
}

export default Contact;
