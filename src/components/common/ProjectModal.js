import React from "react";
import { Modal } from "react-bootstrap";
import { UI_LABELS } from "../../constants/portfolioData";
import Icon from "./Icon";

function ProjectModal({ project, show, onHide }) {
  if (!project) return null;

  const { modalLabels } = UI_LABELS.projects;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      contentClassName="portfolio-modal-content"
      aria-labelledby="project-case-study-title"
    >
      <Modal.Header closeButton className="portfolio-modal-header">
        <div>
          <span className="project-category-badge mb-2 d-inline-block">
            {project.category}
          </span>
          <Modal.Title id="project-case-study-title" className="project-title">
            {project.title}
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body className="portfolio-modal-body p-4">
        <div className="mb-4">
          <h4 className="modal-section-heading">{modalLabels.overview}</h4>
          <p className="project-description mb-0">{project.description}</p>
        </div>

        {project.architecture?.length > 0 && (
          <div className="mb-4">
            <h4 className="modal-section-heading">
              {modalLabels.architecture}
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
              {project.architecture.map((point, idx) => (
                <li key={idx} className="project-highlight-item">
                  <span className="project-highlight-icon">
                    <Icon name="checkCircle" size={15} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.deliverables && (
          <div className="mb-4">
            <h4 className="modal-section-heading">
              {modalLabels.deliverables}
            </h4>
            <div className="deliverable-callout p-3 rounded-3">
              <p className="mb-0">{project.deliverables}</p>
            </div>
          </div>
        )}

        <div>
          <h4 className="modal-section-heading">{modalLabels.techStack}</h4>
          <div className="d-flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="portfolio-modal-footer">
        <button
          type="button"
          onClick={onHide}
          className="btn-outline-subtle py-2 px-4"
        >
          {modalLabels.closeBtn}
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
