import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [activeLink, setActiveLink] = useState("About");
  
  const handleNavClick = (index) => {
    setExpanded(false);
    setActiveLink(prev=>!prev);
  };

  return (
    <Navbar expanded={expanded} variant="dark" expand="lg" fixed="top" className='nav-container mb-1 position-sticky mx-auto'>
      <Container className='max-w-90'>
        <Navbar.Brand href="#home">Shakeel Ahmed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(prev => !prev)} />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link href="#about"onClick={() => handleNavClick("about")}
            className={activeLink === "about" ? "active" : ""}>About</Nav.Link>
              <Nav.Link href="#skills"  onClick={() => handleNavClick("skills")}
            className={activeLink === "skills" ? "active" : ""}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={() => handleNavClick("projects")}
            className={activeLink === "projects" ? "active" : ""}>Projects</Nav.Link>
              <Nav.Link href="#contact" onClick={() => handleNavClick("contact")}
            className={activeLink === "contact" ? "active" : ""}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
