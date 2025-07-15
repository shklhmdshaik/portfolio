import React from 'react';


const projects = [
  {
    title: "Learning Management System (LMS)",
    stack: ["React.js", "javascript", "CSS", "Bootstrap"],
    details: [
      "A learning management system (LMS) is a software application used in schools to manage, deliver, and track educational courses, training programs, or learning and development programs"
    ]
  },
  {
    title: "Clinical Trials",
    stack: ["React.js", "javascript", "Bootstrap", "CSS"],
    details: [
      "The Clinical and Translational Science (CTS) Program is designed for trainees who seek to affect the translation of research into improved clinical care and public health."
    ]
  },
  {
    title: "Shared Investigator Platform",
    stack: ["jQuery", "javascript", "CSS", "Bootstrap"],
    details: [
      'The Shared Investigator Platform or ("SIP") is a shared platform that allows multiple participating clinical trial sponsors ("SIP Sponsors") to communicate directly with participating sites, investigators, and other users at participating sites while conducting clinical trials. The SIP also makes it easier for clinical trial sites, investigators and other users at participating sites to participate in trials by enabling them to enter required information once and allowing site users to choose to have that information be visible to multiple study sponsors.'
    ]
  },
  {
    title: "Gamessouk",
    stack: ["jQuery", "Javascript", "CSS", "Bootstrap"],
    details: [
      "Gamessouk is an online store specializing in the sale of video games, gaming accessories, and related products"
    ]
  }

];

function Projects() {
  return (
    <section className="container py-2 px-0 my-5 max-w-90 opacity-75" id="projects">
    <h2 className="text-center mb-4">Projects</h2>
    <div className="row g-4">
      {projects.map((project, idx) => (
        <div key={idx} className="col-md-6 s:mx-2">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <div>
                {project.details.map((point, i) => <p key={i}>{point}</p>)}
              </div>
              <div className='d-lg-flex d-md-block'> 
                {project.stack.map((point, i) => <p key={i} className='me-4 border px-3 py-2 bg-color rounded-2 text-light fw-bold'> {point}</p>)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Projects;
