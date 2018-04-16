// Global Imports
import React from "react";
import PropTypes from "prop-types";

const PendingGuest = props => {
  if (props.name) {
    return (
      <li className="pending">
        <span>{props.name}</span>
      </li>
    );
  }
  return null;
};

// Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
// For React 16
PendingGuest.propTypes = {
  name: PropTypes.string.isRequired
};

export default PendingGuest;
