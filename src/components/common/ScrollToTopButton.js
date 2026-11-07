import React from "react";
import { UI_LABELS } from "../../constants/portfolioData";
import Icon from "./Icon";

function ScrollToTopButton({ visible }) {
  if (!visible) return null;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      aria-label={UI_LABELS.scrollToTop}
      title={UI_LABELS.scrollToTop}
      className="scroll-top-btn"
    >
      <Icon name="arrowUp" size={18} />
    </button>
  );
}

export default ScrollToTopButton;
