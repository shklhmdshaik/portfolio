import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ABOUT_DATA } from "../constants/portfolioData";
import SectionHeader from "./common/SectionHeader";
import SectionWrapper from "./common/SectionWrapper";
import Icon from "./common/Icon";

function About() {
  return (
    <SectionWrapper id={ABOUT_DATA.sectionId}>
      <Container>
        <SectionHeader
          badge={ABOUT_DATA.badge}
          title={ABOUT_DATA.title}
          subtitle={ABOUT_DATA.subtitle}
        />

        <div className="surface-card p-4 p-md-5 mb-4">
          <Row className="g-4 align-items-center">
            <Col xs={12} lg={7}>
              {ABOUT_DATA.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === ABOUT_DATA.paragraphs.length - 1
                      ? "mb-0 about-paragraph"
                      : "mb-3 about-paragraph"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </Col>

            <Col xs={12} lg={5}>
              <Row className="g-3">
                {ABOUT_DATA.highlights.map((stat) => (
                  <Col xs={6} key={stat.label}>
                    <div className="stat-card">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label fw-semibold">{stat.label}</div>
                      {stat.detail && (
                        <div className="stat-detail mt-1">{stat.detail}</div>
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        {ABOUT_DATA.pillars?.length > 0 && (
          <Row className="g-4">
            {ABOUT_DATA.pillars.map((pillar) => (
              <Col xs={12} md={4} key={pillar.id}>
                <div className="surface-card surface-card-interactive h-100 p-4">
                  <div className="skill-category-icon mb-3">
                    <Icon name={pillar.icon} size={20} />
                  </div>
                  <h3 className="pillar-title mb-2">{pillar.title}</h3>
                  <p className="pillar-description mb-0">
                    {pillar.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </SectionWrapper>
  );
}

export default About;
