import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const projects = [
  {
    title: "Learning Management System (LMS)",
    client: "Educator, CareerSmith",
    role: "React JS Developer",
    teamSize: 2,
    website: "",
    details: [
      "Built scalable LMS platform with course management and quizzes.",
      "Used React.js, Context API, and secure routing.",
      "Integrated with backend APIs and handled unit testing."
    ]
  },
  {
    title: "Clinical Trials",
    client: "Cognizant",
    role: "React JS Developer",
    teamSize: 4,
    website: "",
    details: [
      "Developed responsive UI using ReactJS and Bootstrap.",
      "Built reusable components and tested modules.",
      "Collaborated with backend developers."
    ]
  },
  {
    title: "Shared Investigator Platform",
    client: "Cognizant",
    role: "UI Developer",
    teamSize: 4,
    website: "",
    details: [
      "Used HTML, CSS, Bootstrap, jQuery for building user-facing features.",
      "Conducted unit testing and collaborated with backend team."
    ]
  },
  {
    title: "Gamessouk",
    client: "Falcon Games, Kuwait",
    role: "UI Designer",
    teamSize: 4,
    website: "https://www.gamessouk.com",
    details: [
      "Designed responsive pages using HTML5 and CSS3.",
      "Validated UI modules and presented to clients in agile calls."
    ]
  },
  {
    title: "The Face Shop",
    client: "Internal",
    role: "UI Designer",
    teamSize: 4,
    website: "https://www.thefaceshop.com",
    details: [
      "Created web pages using PHP, HTML5, CSS3.",
      "Conducted testing and resolved UI bugs before delivery."
    ]
  }
];

function Projects() {
  return (
    <section className="container py-5" id="projects">
    <h2 className="text-center mb-4">Projects</h2>
    <div className="row g-4">
      {projects.map((project, idx) => (
        <div key={idx} className="col-md-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">{project.title}</h5>
              <p className="card-text">
                <strong>Client:</strong> {project.client}<br />
                <strong>Role:</strong> {project.role} | <strong>Team Size:</strong> {project.teamSize}
              </p>
              {project.website && (
                <a href={project.website} target="_blank" rel="noopener noreferrer" className="d-block mb-2">
                  Visit Website
                </a>
              )}
              <ul>
                {project.details.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
}

export default Projects;
