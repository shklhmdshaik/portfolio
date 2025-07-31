import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // close menu when any link is clicked
  };
  return (
    <Navbar expanded={expanded} variant="dark" expand="lg" fixed="top" className='nav-container mb-1 position-sticky mt-2 mx-auto'>
      <Container className='max-w-90'>
        <Navbar.Brand href="#home">Shakeel Ahmed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(prev => !prev)} />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto">
              <Nav.Link href="#about" onClick={handleNavClick}>About</Nav.Link>
              <Nav.Link href="#skills" onClick={handleNavClick}>Skills</Nav.Link>
              <Nav.Link href="#projects" onClick={handleNavClick}>Projects</Nav.Link>
              <Nav.Link href="#contact" onClick={handleNavClick}>Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
