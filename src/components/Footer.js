import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="text-white text-center py-3 my-5 max-w-90 mx-auto">
      <Container>
        <small>© {new Date().getFullYear()} Shakeel Ahmed. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;