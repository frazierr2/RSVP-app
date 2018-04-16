// Global Imports
import React from "react";
import PropTypes from "prop-types";
// Local Imports
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

const GuestList = props => (
  <ul>
    <PendingGuest name={props.pendingGuest} />
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={() => props.toggleConfirmation(guest.id)}
          handleToggleEditing={() => props.toggleEditing(guest.id)}
          setName={text => props.setName(text, guest.id)}
          handleRemove={() => props.removeGuest(guest.id)}
        />
      ))}
  </ul>
);

// Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
// For React 16
GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default GuestList;
