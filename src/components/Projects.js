import React, { useState, useMemo, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PROJECTS_DATA, UI_LABELS } from "../constants/portfolioData";
import SectionHeader from "./common/SectionHeader";
import SectionWrapper from "./common/SectionWrapper";
import ProjectModal from "./common/ProjectModal";
import Icon from "./common/Icon";

function Projects() {
  const [activeFilter, setActiveFilter] = useState(
    PROJECTS_DATA.filterCategories[0]
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return PROJECTS_DATA.items.filter((project) => {
      const matchesCategory =
        activeFilter === PROJECTS_DATA.filterCategories[0] ||
        project.filterTags?.includes(activeFilter) ||
        project.category === activeFilter;

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const inTitle = project.title.toLowerCase().includes(normalizedQuery);
      const inDesc = project.description
        .toLowerCase()
        .includes(normalizedQuery);
      const inStack = project.stack.some((tech) =>
        tech.toLowerCase().includes(normalizedQuery)
      );

      return inTitle || inDesc || inStack;
    });
  }, [activeFilter, searchQuery]);

  const handleResetFilters = useCallback(() => {
    setActiveFilter(PROJECTS_DATA.filterCategories[0]);
    setSearchQuery("");
  }, []);

  return (
    <SectionWrapper id={PROJECTS_DATA.sectionId}>
      <Container>
        <SectionHeader
          badge={PROJECTS_DATA.badge}
          title={PROJECTS_DATA.title}
          subtitle={PROJECTS_DATA.subtitle}
        />

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-stretch align-items-lg-center gap-3 mb-4">
          <div
            className="d-flex flex-wrap gap-2"
            role="tablist"
            aria-label="Project category filters"
          >
            {PROJECTS_DATA.filterCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeFilter === category}
                onClick={() => setActiveFilter(category)}
                className={`filter-tab-btn ${
                  activeFilter === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-search-box">
            <span className="project-search-icon">
              <Icon name="search" size={15} />
            </span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={UI_LABELS.projects.searchPlaceholder}
              aria-label={UI_LABELS.projects.searchPlaceholder}
              className="project-search-input"
            />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="surface-card p-5 text-center">
            <p className="project-description mb-3">
              {UI_LABELS.projects.emptyState}
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn-outline-subtle py-2 px-4"
            >
              {UI_LABELS.projects.resetFilterBtn}
            </button>
          </div>
        ) : (
          <Row className="g-4">
            {filteredProjects.map((project) => (
              <Col xs={12} lg={6} key={project.id}>
                <article className="surface-card surface-card-interactive h-100 p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                      <span className="project-category-badge">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="project-title mt-2 mb-2">{project.title}</h3>
                    <p className="project-description mb-3">
                      {project.description}
                    </p>

                    {project.highlights?.length > 0 && (
                      <ul className="list-unstyled mb-4 d-flex flex-column gap-2">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="project-highlight-item">
                            <span className="project-highlight-icon">
                              <Icon name="checkCircle" size={15} />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <div className="d-flex flex-wrap gap-2 pb-3 mb-3 border-bottom border-secondary border-opacity-25">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="case-study-btn w-100"
                    >
                      <span>{UI_LABELS.projects.viewDetailsBtn}</span>
                      <Icon name="arrowUpRight" size={15} />
                    </button>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        )}

        <ProjectModal
          project={selectedProject}
          show={Boolean(selectedProject)}
          onHide={() => setSelectedProject(null)}
        />
      </Container>
    </SectionWrapper>
  );
}

export default Projects;
