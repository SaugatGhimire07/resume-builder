import React from "react";
import "./Profile.css";
import Edit from "./Edit";

const Profile = () => {
  return (
    <div className="profile-container">
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
    </div>
  );
};

export default Profile;
