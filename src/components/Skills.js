import React from "react";
import Edit from "./Edit";

function Skills() {
  return (
    <div className="section-container skills-section">
      <div className="section-content">
        <p className="section-subheading">Skills</p>
        <div className="section-description">
          <div className="section-info">
            <span className="skill-type">Technical Skills:</span>
            <span className="divider"></span>
            <span className="info-item">
              List your relevant technical skills, including programming
              languages, tools, and technologies you are proficient in.
            </span>
          </div>
          <div className="section-info">
            <span className="skill-type">Soft Skills:</span>
            <span className="divider"></span>
            <span className="info-item">
              Highlight your key soft skills, such as communication, teamwork,
              problem-solving, and adaptability.
            </span>
          </div>
        </div>
      </div>
      <div className="section-edit">
        <Edit />
      </div>
    </div>
  );
}

export default Skills;
