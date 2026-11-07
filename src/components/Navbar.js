import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  NAV_LINKS,
  SITE_METADATA,
  UI_LABELS,
} from "../constants/portfolioData";
import { useTheme } from "../context/ThemeContext";
import Icon from "./common/Icon";

function PortfolioNavbar({ activeId, onSelectSection, scrollProgress = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = (id) => {
    setExpanded(false);
    if (onSelectSection) {
      onSelectSection(id);
    }
  };

  const themeAriaLabel = isDark
    ? UI_LABELS.themeToggle.darkLabel
    : UI_LABELS.themeToggle.lightLabel;

  return (
    <header>
      <Navbar
        expanded={expanded}
        variant={isDark ? "dark" : "light"}
        expand="lg"
        fixed="top"
        className="nav-container py-2"
      >
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />
        <Container>
          <Navbar.Brand
            href={`#${NAV_LINKS[0]?.id || "home"}`}
            onClick={() => handleNavClick(NAV_LINKS[0]?.id || "home")}
            className="d-flex align-items-center gap-2"
          >
            <img
              src={SITE_METADATA.logo}
              alt={SITE_METADATA.logoAlt}
              width="34"
              height="34"
              className="logo"
            />
            <span className="brand-title">{SITE_METADATA.brandName}</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center gap-2 order-lg-last">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeAriaLabel}
              title={themeAriaLabel}
              className="theme-toggle-btn"
            >
              <Icon name={isDark ? "sun" : "moon"} size={17} />
            </button>

            <Navbar.Toggle
              aria-controls="portfolio-navbar-nav"
              aria-label="Toggle navigation"
              onClick={() => setExpanded((prev) => !prev)}
            />
          </div>

          <Navbar.Collapse id="portfolio-navbar-nav">
            <Nav className="ms-auto me-lg-3 align-items-lg-center pt-2 pt-lg-0">
              {NAV_LINKS.map((navItem) => (
                <Nav.Link
                  key={navItem.id}
                  href={navItem.href}
                  onClick={() => handleNavClick(navItem.id)}
                  className={activeId === navItem.id ? "active" : ""}
                >
                  {navItem.label}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default PortfolioNavbar;
