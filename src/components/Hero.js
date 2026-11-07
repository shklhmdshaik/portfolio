import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HERO_DATA } from "../constants/portfolioData";
import Icon from "./common/Icon";
import SectionWrapper from "./common/SectionWrapper";

function Hero() {
  return (
    <SectionWrapper id={HERO_DATA.sectionId} className="hero-section">
      <Container>
        <div className="hero-card p-4 p-md-5">
          <Row className="align-items-center g-4 g-lg-5">
            <Col xs={12} lg={4} className="text-center">
              <div className="hero-avatar-wrapper">
                <img
                  src={HERO_DATA.profileImage}
                  alt={HERO_DATA.profileImageAlt}
                  width="210"
                  height="210"
                  className="hero-avatar"
                />
              </div>
            </Col>

            <Col xs={12} lg={8} className="text-center text-lg-start">
              <span className="section-badge mb-3">
                {HERO_DATA.greetingBadge}
              </span>

              <h1 className="hero-title mt-2 mb-3">{HERO_DATA.fullName}</h1>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center mb-3">
                {HERO_DATA.roles.map((role, index) => (
                  <React.Fragment key={role}>
                    <span className="hero-role-pill">{role}</span>
                    {index < HERO_DATA.roles.length - 1 && (
                      <span className="hero-role-divider" aria-hidden="true">
                        |
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <p className="hero-summary mx-auto mx-lg-0 mb-4">
                {HERO_DATA.summary}
              </p>

              {HERO_DATA.quickHighlights?.length > 0 && (
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 mb-4">
                  {HERO_DATA.quickHighlights.map((item) => (
                    <span key={item.text} className="hero-feature-chip">
                      <Icon name={item.icon} size={14} />
                      <span>{item.text}</span>
                    </span>
                  ))}
                </div>
              )}

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <a href={HERO_DATA.primaryCta.href} className="btn-accent">
                  <span>{HERO_DATA.primaryCta.label}</span>
                  <Icon name="arrowUpRight" size={16} />
                </a>
                <a
                  href={HERO_DATA.secondaryCta.href}
                  className="btn-outline-subtle"
                >
                  <span>{HERO_DATA.secondaryCta.label}</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default Hero;
