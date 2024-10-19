import React from "react";
import Edit from "./Edit";

function Summary() {
  return (
    <div className="section-container summary-section">
      <div className="section-content">
        <p className="section-subheading">Summary</p>
        <div className="section-description">
          <p className="description">
            Enter a brief description of your professional background. You can
            choose to highlight specific skills, knowledge or industry
            experience.
          </p>
        </div>
      </div>
      <div className="section-edit">
        <Edit />
      </div>
    </div>
  );
}

export default Summary;
