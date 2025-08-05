import React from 'react';
import shakeel from "../assets/images/shakeel.jpg"
function Hero() {
  return (
    <section id="home" className="container text-white py-5 my-5 shadow mx-auto max-w-90 hero-section">
      <div className='row align-items-center'>
        <div className='col-md-4 text-center text-sm-center text-lg-start'>
        <img src={shakeel} alt="Shakeel" className='img-fluid rounded-circle rotate-hover ps-2 text-center text-lg-start' style={{maxWidth: "200px", height:"auto"}}/>
      </div>
      
      <div className='col-md-8 text-center text-lg-center'>
        <h1 className="display-5 pt5-5 pb-3 fw-bold">Shaik Shakeel Ahmed</h1>
        <p className="lead fw-semibold">React js Developer | Front End Developer | UI Developer</p>
      </div>

</div>

    </section>
  );
}

export default Hero;