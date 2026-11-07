import React, { Suspense, lazy, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NAV_LINKS, UI_LABELS } from "./constants/portfolioData";
import { ThemeProvider } from "./context/ThemeContext";
import { useScrollSpy } from "./hooks/useScrollSpy";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ScrollToTopButton from "./components/common/ScrollToTopButton";
import PortfolioNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function SectionFallback() {
  return (
    <div className="container py-5 text-center" aria-live="polite">
      <div className="section-loading-pill">{UI_LABELS.loadingFallback}</div>
    </div>
  );
}

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
        <Suspense fallback={<SectionFallback />}>
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
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
