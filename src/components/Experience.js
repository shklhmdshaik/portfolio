import React from "react";
import { Container } from "react-bootstrap";
import { EXPERIENCE_DATA } from "../constants/portfolioData";
import SectionHeader from "./common/SectionHeader";
import SectionWrapper from "./common/SectionWrapper";
import Icon from "./common/Icon";

function Experience() {
  return (
    <SectionWrapper id={EXPERIENCE_DATA.sectionId}>
      <Container>
        <SectionHeader
          badge={EXPERIENCE_DATA.badge}
          title={EXPERIENCE_DATA.title}
          subtitle={EXPERIENCE_DATA.subtitle}
        />

        <div className="experience-timeline">
          {EXPERIENCE_DATA.timeline.map((item) => (
            <div
              key={item.id}
              className="surface-card surface-card-interactive timeline-card p-4 p-md-5 mb-4"
            >
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="skill-category-icon">
                    <Icon name="briefcase" size={19} />
                  </div>
                  <div>
                    <h3 className="project-title mb-1">{item.role}</h3>
                    <div className="timeline-focus">{item.focus}</div>
                  </div>
                </div>
                <span className="project-category-badge align-self-start align-self-md-center">
                  {item.period}
                </span>
              </div>

              <p className="project-description mb-3">{item.summary}</p>

              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                {item.achievements.map((achievement, index) => (
                  <li key={index} className="project-highlight-item">
                    <span className="project-highlight-icon">
                      <Icon name="checkCircle" size={15} />
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-2 pt-3 border-top border-secondary border-opacity-25">
                {item.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}

export default Experience;
