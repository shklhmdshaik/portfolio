import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 my-2">
      <Container>
        <small>© {new Date().getFullYear()} Shakeel Ahmed. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;