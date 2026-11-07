import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CONTACT_DATA, UI_LABELS } from "../constants/portfolioData";
import SectionHeader from "./common/SectionHeader";
import SectionWrapper from "./common/SectionWrapper";
import Icon from "./common/Icon";
import { useClipboard } from "../hooks/useClipboard";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const { copiedKey, copyToClipboard } = useClipboard();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus({ type: "", text: "" });
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { name, email, subject, message } = formData;
      if (!name.trim() || !email.trim() || !message.trim()) {
        setStatus({
          type: "error",
          text: UI_LABELS.contact.validationError,
        });
        return;
      }

      const mailSubject = encodeURIComponent(
        subject.trim() || `Portfolio Inquiry from ${name.trim()}`
      );
      const mailBody = encodeURIComponent(
        `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
      );

      setStatus({
        type: "success",
        text: UI_LABELS.contact.successMessage,
      });

      if (typeof window !== "undefined") {
        window.location.href = `mailto:${CONTACT_DATA.directEmail}?subject=${mailSubject}&body=${mailBody}`;
      }
      setFormData(INITIAL_FORM);
    },
    [formData]
  );

  const { fields } = UI_LABELS.contact;

  return (
    <SectionWrapper id={CONTACT_DATA.sectionId}>
      <Container>
        <SectionHeader
          badge={CONTACT_DATA.badge}
          title={CONTACT_DATA.title}
          subtitle={CONTACT_DATA.subtitle}
        />

        <Row className="g-4 align-items-stretch">
          <Col xs={12} lg={5}>
            <div className="d-flex flex-column gap-3 h-100">
              {CONTACT_DATA.methods.map((method) => {
                const isCopied = copiedKey === method.id;

                return (
                  <div
                    key={method.id}
                    className="surface-card surface-card-interactive p-3 px-4 d-flex align-items-center justify-content-between gap-3"
                  >
                    <a
                      href={method.href}
                      target={method.isExternal ? "_blank" : undefined}
                      rel={
                        method.isExternal ? "noopener noreferrer" : undefined
                      }
                      className="d-flex align-items-center gap-3 text-decoration-none flex-grow-1 min-w-0"
                    >
                      <div className="contact-icon-box">
                        <Icon name={method.icon} size={20} />
                      </div>
                      <div className="min-w-0">
                        <div className="contact-label">{method.label}</div>
                        <div className="contact-value text-truncate">
                          {method.value}
                        </div>
                      </div>
                    </a>

                    {method.canCopy ? (
                      <button
                        type="button"
                        onClick={() =>
                          copyToClipboard(method.copyValue, method.id)
                        }
                        aria-label={`${UI_LABELS.contact.copyText} ${method.label}`}
                        className={`copy-action-btn ${
                          isCopied ? "copied" : ""
                        }`}
                      >
                        <Icon name={isCopied ? "check" : "copy"} size={14} />
                        <span>
                          {isCopied
                            ? UI_LABELS.contact.copiedText
                            : UI_LABELS.contact.copyText}
                        </span>
                      </button>
                    ) : (
                      <a
                        href={method.href}
                        target={method.isExternal ? "_blank" : undefined}
                        rel={
                          method.isExternal ? "noopener noreferrer" : undefined
                        }
                        className="copy-action-btn text-decoration-none"
                      >
                        <span>{UI_LABELS.contact.openLinkText}</span>
                        <Icon name="arrowUpRight" size={14} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <div className="surface-card p-4 p-md-5 h-100">
              <h3 className="project-title mb-1">
                {UI_LABELS.contact.formTitle}
              </h3>
              <p className="project-description mb-4">
                {UI_LABELS.contact.formSubtitle}
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <Row className="g-3">
                  <Col xs={12} sm={6}>
                    <label htmlFor="contact-name" className="form-label-custom">
                      {fields.nameLabel} *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={fields.namePlaceholder}
                      className="form-input-custom"
                    />
                  </Col>

                  <Col xs={12} sm={6}>
                    <label
                      htmlFor="contact-email"
                      className="form-label-custom"
                    >
                      {fields.emailLabel} *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={fields.emailPlaceholder}
                      className="form-input-custom"
                    />
                  </Col>

                  <Col xs={12}>
                    <label
                      htmlFor="contact-subject"
                      className="form-label-custom"
                    >
                      {fields.subjectLabel}
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={fields.subjectPlaceholder}
                      className="form-input-custom"
                    />
                  </Col>

                  <Col xs={12}>
                    <label
                      htmlFor="contact-message"
                      className="form-label-custom"
                    >
                      {fields.messageLabel} *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={fields.messagePlaceholder}
                      className="form-input-custom"
                    />
                  </Col>

                  {status.text && (
                    <Col xs={12}>
                      <div
                        role="alert"
                        className={`form-status-banner ${
                          status.type === "error"
                            ? "status-error"
                            : "status-success"
                        }`}
                      >
                        {status.text}
                      </div>
                    </Col>
                  )}

                  <Col xs={12}>
                    <button type="submit" className="btn-accent">
                      <Icon name="send" size={15} />
                      <span>{UI_LABELS.contact.submitBtn}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}

export default Contact;
