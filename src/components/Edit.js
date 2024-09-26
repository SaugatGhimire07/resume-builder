import React from "react";
import { Edit2 } from "react-feather";
import "./Edit.css";

const Edit = () => {
  return (
    <div>
      <button type="button" className="edit-btn">
        <Edit2 size={20} strokeWidth={2} color="#1E1E1E" />
      </button>
    </div>
  );
};

export default Edit;
