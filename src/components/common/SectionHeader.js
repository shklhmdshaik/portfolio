import React from "react";

function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="section-header text-center text-md-start mb-4 mb-lg-5">
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-title mt-2 mb-2">{title}</h2>
      {subtitle && <p className="section-subtitle mb-0">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
