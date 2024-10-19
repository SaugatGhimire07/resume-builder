import React, { useState } from "react";
import "./Resume.css";
import Edit from "./Edit";
import ExperienceOverlay from "./overlays/ExperienceOverlay";

function Experience() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div
      className="section-container experience-section"
      onClick={toggleOverlay}
    >
      <p className="section-subheading">Experience</p>
      <div className="section-info">
        <span className="info-item sub-info">Company A</span>
        <span className="divider">|</span>
        <span className="info-item sub-info">Location</span>
      </div>

      <div className="section-info">
        <span className="info-item sub-info">Software Engineer</span>
        <span className="divider">|</span>
        <span className="info-item sub-info">Start and End Date</span>
      </div>

      <div className="section-description">
        <p className="description">
          Show that you create value with your work by listing your
          responsibilities and quantifiable achievements.
        </p>
      </div>

      <div className="section-edit">
        <Edit />
      </div>

      {isOverlayOpen && (
        <div style={overlayStyle}>
          <ExperienceOverlay />
        </div>
      )}
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

export default Experience;
