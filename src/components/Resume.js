import React from "react";
import "./Resume.css";
import Profile from "./Profile";
import Experience from "./Experience";
import Summary from "./Summary";
import Skills from "./Skills";
import Education from "./Education";

const Resume = () => {
  return (
    <div className="resume-container">
      <Profile />
      <Summary />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
};

export default Resume;
