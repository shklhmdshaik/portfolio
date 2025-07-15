import React from 'react';
import { Container } from 'react-bootstrap';
import shakeel from "../assets/images/shakeel.jpg"
function Hero() {
  return (
    <section id="home" className="container text-white p-3 d-flex  max-w-90 shadow my-5">
      <div className='w-25'>
        <img src={shakeel} alt="Shakeel" className='img-fluid rounded-circle rotate-hover p-5' width="max-width: 150px" height="auto"/>
      </div>
      <div className='w-75'>
        <h1 className="display-4 py-5 fw-bold">Shaik Shakeel Ahmed</h1>
        <p className="lead fw-semibold">React js Developer | Front End Developer | UI Developer</p>
      </div>



    </section>
  );
}

export default Hero;