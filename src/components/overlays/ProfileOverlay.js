import React from "react";
import "./ProfileOverlay.css";
import { X } from "react-feather";

const ProfileOverlay = () => {
  return (
    <div className="profile-overlay-container">
      <div className="overlay-header">
        <div className="overlay-title">
          <h2>Contact Info</h2>
        </div>
        <X className="close-icon" size={28} strokeWidth={2} color="#1E1E1E" />
      </div>

      <div className="overlay-subheading">
        <div className="input-container">
          <div className="left-contents">
            <div className="row">
              <label>
                First Name <input name="first-name" placeholder="Jerry" />
              </label>
              <label>
                Last Name <input name="last-name" placeholder="Smith" />
              </label>
            </div>
            <div className="row">
              <label>
                Email <input name="email" placeholder="Jerry@gmail.com" />
              </label>
              <label>
                Phone <input name="phone" placeholder="(437)662-9287" />
              </label>
            </div>
            <label>
              Address <input name="address" placeholder="City, State" />
            </label>
          </div>
        </div>
        <div className="tips-container">
          Tips
          <br /> The difference is in the details. More than 80% of employers
          think that a phone number must always be present on a resume.* Make
          sure that you add your contact information so that employers can
          contact you for a job interview! Employers usually want to know the
          city and state you currently live in, even if you plan to move soon.
          If you’re applying for a position that is located far away, share a
          little about why you’re applying in your cover letter to help the
          employer better understand why you’re still a great fit for the job.
          *Indeed survey conducted with Lucid, N=2661 employers among 10
          industries.
        </div>
      </div>

      <div className="overlay-footer">
        <div className="footer-btn">
          <button className="secondary-btn" type="button">
            Cancel
          </button>
          <button className="primary-btn" type="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverlay;
