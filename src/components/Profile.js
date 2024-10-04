import React, { useState } from "react";
import "./Profile.css";
import Edit from "./Edit";
import ProfileOverlay from "./overlays/ProfileOverlay";

function Profile() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // Corrected the function declaration syntax
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div className="profile-container" onClick={toggleOverlay}>
      <div className="profile">
        <p className="name">Unclaimed Giraffe</p>
        <div className="contact-info">
          <span className="city">City, State</span>
          <span className="divider">|</span>
          <span className="phone">Phone Number</span>
        </div>
        <p className="email">Email@email.com</p>
      </div>
      <div className="profile-edit">
        <Edit />
      </div>

      {/* Conditionally render the overlay */}
      {isOverlayOpen && (
        <div style={overlayStyle}>
          <ProfileOverlay />
        </div>
      )}
    </div>
  );
}

// Inline styles for overlay and content
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
  zIndex: 1000, // Ensure overlay is on top
};

export default Profile;
