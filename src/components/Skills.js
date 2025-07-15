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
   
    <section id="skills" className='container p-0 my-5 max-w-90'>
       <div className="sm:p-8">
      <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
         {Object.entries(skills).map(([category, items]) => (
           <div key={category} className="p-4 shadow">
             <h3 className="font-semibold text-lg mb-2">{category}</h3>
             <ul className="list-disc list-inside space-y-1 text-sm">
               {items.map((skill) => (
                 <li key={skill}>{skill}</li>
               ))}
             </ul>
           </div>
         ))}
       </div>
     </div>
     </section>
  );
}

export default Skills;