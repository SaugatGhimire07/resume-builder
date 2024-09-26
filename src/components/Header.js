import React from "react";
import "./Header.css";
import { Download } from "react-feather";

const Header = () => {
  return (
    <div>
      <p className="header">My Resume</p>
      <div className="sub-header">
        <button type="button" className="download-btn">
          <span>
            <Download size={22} strokeWidth={2} color="#1E1E1E" />
          </span>
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Header;
