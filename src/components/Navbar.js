import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function PortfolioNavbar() {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className='nav-container mb-1 position-sticky mt-2 mx-auto max-w-90'>
      <Container>
        <Navbar.Brand href="#home">Shakeel Ahmed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
