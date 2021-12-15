import React from "react";
import PropTypes from "prop-types";

function DurationSetting({ label, onDecrease, onIncrease, testid }) {
    return (
        <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid={`duration-${testid}`}>
              {label}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid={`decrease-${testid}`}
                onClick={onDecrease}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid={`increase-${testid}`}
                onClick={onIncrease}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
        </div>
    )
}

DurationSetting.propTypes = {
    label: PropTypes.string.isRequired,
    onDecrease: PropTypes.func.isRequired,
    onIncrease: PropTypes.func.isRequired,
    testid: PropTypes.string.isRequired,
};
export default DurationSetting;