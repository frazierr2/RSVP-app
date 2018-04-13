// Global Imports
import React from "react";
import PropTypes from "prop-types";
// Local Imports
import Guest from "./Guest";

const GuestList = props => (
  <ul>
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmationAt(index)}
          handleToggleEditing={() => props.toggleEditingAt(index)}
          setName={text => props.setNameAt(text, index)}
        />
      ))}
  </ul>
);

// Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
// For React 16
GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
};

export default GuestList;
