import React from "react";
import Edit from "./Edit";

function Experience() {
  return (
    <div className="section-container education-section">
      <p className="section-subheading">Education</p>
      <div className="section-info">
        <span className="info-item sub-info">University/School</span>
        <span className="divider">|</span>
        <span className="info-item sub-info">Location</span>
      </div>

      <div className="section-info">
        <span className="info-item sub-info">Field of Study</span>
        <span className="divider">|</span>
        <span className="info-item sub-info">Graduation Date</span>
      </div>

      <div className="section-description">
        <p className="description">Include additonal academic information</p>
      </div>

      <div className="section-edit">
        <Edit />
      </div>
    </div>
  );
}

export default Experience;
