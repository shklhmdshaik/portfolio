import React from "react";
import { Container } from "react-bootstrap";
import { CONTACT_DATA, FOOTER_DATA } from "../constants/portfolioData";
import Icon from "./common/Icon";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer py-4 mt-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="text-center text-md-start">
          <small className="d-block fw-semibold">
            © {currentYear} {FOOTER_DATA.copyrightName}.{" "}
            {FOOTER_DATA.rightsText}
          </small>
          <small className="project-description">{FOOTER_DATA.tagline}</small>
        </div>

        <div className="d-flex align-items-center gap-2">
          {CONTACT_DATA.methods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.isExternal ? "_blank" : undefined}
              rel={method.isExternal ? "noopener noreferrer" : undefined}
              aria-label={method.label}
              className="footer-social-link"
            >
              <Icon name={method.icon} size={16} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
