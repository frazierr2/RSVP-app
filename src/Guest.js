// Global Imports
import React from "react";
import PropTypes from "prop-types";

import GuestName from "./GuestName";

const Guest = props => (
  <li>
    <GuestName
      isEditing={props.isEditing}
      handleNameEdit={e => props.setName(e.target.value)}
    >
      {props.name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={props.isConfirmed}
        onChange={props.handleConfirmation}
      />
      Confirmed
    </label>
    <button onClick={props.handleToggleEditing}>
      {props.isEditing ? "Save" : "Edit"}
    </button>
    <button onClick={props.handleRemove}>Remove</button>
  </li>
);

// Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
// For React 16
Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Guest;
