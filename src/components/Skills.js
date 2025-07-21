import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

// const skills = [
//   'React.js', 'Redux', 'Bootstrap', 'HTML5', 'CSS3',
//   'SASS', 'JavaScript ES6', 'jQuery', 'Material UI', 'Tailwind CSS',
//   'REST API', 'Git', 'Responsive Design'
// ];
const skills = {
  "Frontend": ["HTML5", "CSS3", "SASS", "JavaScript (ES6)", "TypeScript", "ReactJS", "Redux", "Context API", "jQuery", "Bootstrap", "Tailwind CSS", "Material UI"],
   "Tools & Workflow": ["VS Code", "Chrome DevTools", "Git", "REST API", "Agile/Scrum", "Unit Testing"],
   "CMS / Backend": ["Liferay (basic)", "Node.js (basic)", "PHP/MySQL"],
   "Other": ["Responsive Web Design", "State Management", "Reusable Components", "Authentication", "Real-time Updates"]
 };

function Skills() {
  return (
   
    <section id="skills" className='container p-0 my-5 max-w-90 skill-container'>
       <div className="sm:p-8">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <div className='row'>
      <div className="d-block d-md-flex justify-content-between">
         {Object.entries(skills).map(([category, items]) => (
           <div key={category} className="p-4 shadow skill-container-elem" style={{minWidth: "200px"}}>
             <h3 className="font-semibold text-lg mb-2 text-center">{category}</h3>
             <ul className="list-disc list-inside space-y-1 text-sm list-unstyled">
               {items.map((skill) => (
                 <li key={skill} className='text-center'>{skill}</li>
               ))}
             </ul>
           </div>
         ))}
       </div>
       </div>
     </div>
     </section>
  );
}

export default Skills;