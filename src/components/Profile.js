import React, { useState } from "react";
import "./Resume.css";
import Edit from "./Edit";
import ProfileOverlay from "./overlays/ProfileOverlay";

function Profile() {
  // State to control the visibility of the overlay
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  // State to hold the contact information
  const [contactInfo, setContactInfo] = useState({
    firstName: "Unclaimed",
    lastName: "Giraffe",
    email: "Email@email.com",
    phone: "Phone Number",
    address: "City, State",
  });

  // Default values for contact information
  const defaultValues = {
    firstName: "Unclaimed",
    lastName: "Giraffe",
    email: "Email@email.com",
    phone: "Phone Number",
    address: "City, State",
  };

  // Function to toggle the overlay visibility
  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  // Function to update contact information in the state
  const handleContactInfoChange = (newInfo) => {
    setContactInfo(newInfo);
  };

  return (
    <div className="section-container profile-section" onClick={toggleOverlay}>
      <span className="section-heading">{`${contactInfo.firstName} ${contactInfo.lastName}`}</span>

      <div className="section-info">
        <span className="info-item sub-info">{contactInfo.address}</span>
        <span className="divider">|</span>
        <span className="info-item sub-info">{contactInfo.phone}</span>
      </div>
      <div className="section-description">
        <p className="description">{contactInfo.email}</p>
      </div>

      <div className="section-edit">
        <Edit />
      </div>

      {/* Conditionally render the ProfileOverlay when it is open */}
      {isOverlayOpen && (
        <div style={overlayStyle}>
          <ProfileOverlay
            contactInfo={contactInfo}
            defaultValues={defaultValues}
            onContactInfoChange={handleContactInfoChange}
            onClose={toggleOverlay}
          />
        </div>
      )}
    </div>
  );
}

// Styling for the overlay
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

export default Profile;
