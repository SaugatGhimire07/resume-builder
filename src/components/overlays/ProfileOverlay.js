import React, { useState, useEffect } from "react";
import "./ProfileOverlay.css";
import { X } from "react-feather";

const ProfileOverlay = ({
  contactInfo,
  defaultValues,
  onContactInfoChange,
  onClose,
}) => {
  // Local state to manage the contact information in the overlay
  const [localContactInfo, setLocalContactInfo] = useState(contactInfo);
  // State to track whether the input fields have been focused
  const [hasFocused, setHasFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
  });

  // Effect to synchronize local state with the incoming contact info props
  useEffect(() => {
    setLocalContactInfo(contactInfo);
  }, [contactInfo]);

  // Function to handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalContactInfo({ ...localContactInfo, [name]: value });
  };

  // Function to handle the focus event on input fields
  const handleFocus = (e) => {
    const { name } = e.target;

    // Clear input only if it matches the default value for that field and is the first focus
    if (!hasFocused[name] && localContactInfo[name] === defaultValues[name]) {
      setLocalContactInfo((prev) => ({ ...prev, [name]: "" }));
    }

    // Mark this field as focused
    setHasFocused((prev) => ({ ...prev, [name]: true }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Call the parent function to update contact info
    onContactInfoChange(localContactInfo);
    onClose(); // Close the overlay after submission
  };

  return (
    <div
      className="profile-overlay-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="overlay-header">
        <div className="overlay-title">
          <h2>Contact Info</h2>
        </div>
        <X
          className="close-icon"
          size={28}
          strokeWidth={2}
          color="#1E1E1E"
          onClick={onClose}
        />
      </div>

      <div className="overlay-subheading">
        <div className="input-container">
          <div className="left-contents">
            <div className="row">
              <label>
                First Name
                <input
                  name="firstName"
                  value={localContactInfo.firstName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </label>
              <label>
                Last Name
                <input
                  name="lastName"
                  value={localContactInfo.lastName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </label>
            </div>
            <div className="row">
              <label>
                Email
                <input
                  name="email"
                  value={localContactInfo.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </label>
              <label>
                Phone
                <input
                  name="phone"
                  value={localContactInfo.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </label>
            </div>
            <label>
              Address
              <input
                name="address"
                value={localContactInfo.address}
                onChange={handleChange}
                onFocus={handleFocus}
              />
            </label>
          </div>
        </div>
        <div className="tips-container">
          Tips
          <br />
          The difference is in the details. More than 80% of employers think
          that a phone number must always be present on a resume.* Make sure
          that you add your contact information so that employers can contact
          you for a job interview! Employers usually want to know the city and
          state you currently live in, even if you plan to move soon. If you’re
          applying for a position that is located far away, share a little about
          why you’re applying in your cover letter to help the employer better
          understand why you’re still a great fit for the job. *Indeed survey
          conducted with Lucid, N=2661 employers among 10 industries.
        </div>
      </div>

      <div className="overlay-footer">
        <div className="footer-btn">
          <button className="secondary-btn" type="button" onClick={onClose}>
            Cancel
          </button>
          <button className="primary-btn" type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverlay;
