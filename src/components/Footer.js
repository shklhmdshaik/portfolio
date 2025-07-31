import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="text-white py-3 mt-5 mx-auto">
      <Container className='max-w-90'>
        <small>© {new Date().getFullYear()} Shakeel Ahmed. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;