import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NAV_LINKS } from "./constants/portfolioData";
import { ThemeProvider } from "./context/ThemeContext";
import { useScrollSpy } from "./hooks/useScrollSpy";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import PortfolioNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function PortfolioLayout() {
  const sectionIds = useMemo(() => NAV_LINKS.map((item) => item.id), []);
  const { activeId, selectSection, scrollProgress, showScrollTop } =
    useScrollSpy(sectionIds);

  return (
    <div className="portfolio-wrapper">
      <PortfolioNavbar
        activeId={activeId}
        onSelectSection={selectSection}
        scrollProgress={scrollProgress}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton visible={showScrollTop} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <PortfolioLayout />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
