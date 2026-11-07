import React, { useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SKILLS_DATA, UI_LABELS } from "../constants/portfolioData";
import SectionHeader from "./common/SectionHeader";
import SectionWrapper from "./common/SectionWrapper";
import Icon from "./common/Icon";

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCategories = useMemo(() => {
    if (selectedCategory === "all") {
      return SKILLS_DATA.categories;
    }
    return SKILLS_DATA.categories.filter((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  return (
    <SectionWrapper id={SKILLS_DATA.sectionId}>
      <Container>
        <SectionHeader
          badge={SKILLS_DATA.badge}
          title={SKILLS_DATA.title}
          subtitle={SKILLS_DATA.subtitle}
        />

        <div
          className="d-flex flex-wrap gap-2 mb-4"
          role="tablist"
          aria-label="Skill category filters"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
            className={`filter-tab-btn ${
              selectedCategory === "all" ? "active" : ""
            }`}
          >
            {UI_LABELS.skills.allCategory}
          </button>
          {SKILLS_DATA.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`filter-tab-btn ${
                selectedCategory === cat.id ? "active" : ""
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <Row className="g-4">
          {filteredCategories.map((category) => (
            <Col
              xs={12}
              md={filteredCategories.length === 1 ? 12 : 6}
              key={category.id}
            >
              <div className="surface-card surface-card-interactive h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="skill-category-icon">
                    <Icon name={category.icon} size={20} />
                  </div>
                  <h3 className="skill-category-title mb-0">
                    {category.title}
                  </h3>
                </div>

                <div className="d-flex flex-column gap-3">
                  {category.skills.map((skill) => {
                    const skillName =
                      typeof skill === "string" ? skill : skill.name;
                    const skillLevel =
                      typeof skill === "object" && skill.level
                        ? skill.level
                        : 90;

                    return (
                      <div key={skillName} className="skill-meter-item">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <span className="skill-meter-name">{skillName}</span>
                          <span className="skill-meter-percent">
                            {skillLevel}%
                          </span>
                        </div>
                        <div
                          className="skill-progress-track"
                          role="progressbar"
                          aria-valuenow={skillLevel}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skillName} ${UI_LABELS.skills.proficiencyLabel}`}
                        >
                          <div
                            className="skill-progress-fill"
                            style={{ width: `${skillLevel}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </SectionWrapper>
  );
}

export default Skills;
