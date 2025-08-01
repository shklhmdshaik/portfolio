import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <PortfolioNavbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
