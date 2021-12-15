import React from "react";
import PropTypes from "prop-types";
import { secondsToDuration } from "./utils/duration";
import ProgressBar from "./ProgressBar";

function SessionInformation({ session, isPaused }) {
  if (session === null) {
    return null;
  }

  return (
    <>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">{`${session.label} for ${session.duration} minutes`}</h2>
          <p className="lead" data-testid="session-sub-title">
            {`${secondsToDuration(session.timeRemaining)} remaining`}
          </p>
          {isPaused && <h3>PAUSED</h3>}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <ProgressBar percentComplete={session.percentComplete} />
        </div>
      </div>
    </>
  );
}

SessionInformation.propTypes = {
  session: PropTypes.shape({
    label: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    timeRemaining: PropTypes.number.isRequired,
    percentComplete: PropTypes.number.isRequired,
  }),
  isPaused: PropTypes.bool.isRequired,
};

export default SessionInformation;