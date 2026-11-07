import React from "react";
import { useInView } from "../../hooks/useInView";

function SectionWrapper({ id, className = "", children }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`section-block reveal-section ${
        isInView ? "reveal-visible" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default SectionWrapper;
