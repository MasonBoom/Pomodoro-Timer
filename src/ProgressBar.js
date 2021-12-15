import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ percentComplete }) {
  return (
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Percent complete"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percentComplete} 
        style={{ width: `${percentComplete}%` }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  percentComplete: PropTypes.number.isRequired,
};

export default ProgressBar;