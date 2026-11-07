import React from "react";
import { Container } from "react-bootstrap";
import { UI_LABELS } from "../../constants/portfolioData";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Container className="py-5 text-center">
          <div className="surface-card p-5 mx-auto" style={{ maxWidth: "560px" }}>
            <h2 className="section-title mb-2">
              {UI_LABELS.errorBoundary.title}
            </h2>
            <p className="section-subtitle mx-auto mb-4">
              {UI_LABELS.errorBoundary.subtitle}
            </p>
            <button
              type="button"
              onClick={this.handleRetry}
              className="btn-accent"
            >
              {UI_LABELS.errorBoundary.retryBtn}
            </button>
          </div>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
