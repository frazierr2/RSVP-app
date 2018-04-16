import React from "react";
import PropType from "prop-types";

import Counter from "./Counter";
import GuestList from "./GuestList";
import ConfirmedGuest from "./ConfirmedGuest";

const MainContent = props => {
  return (
    <div className="main">
      <ConfirmedGuest
        toggleHide={props.toggleFilter}
        isFiltered={props.isFiltered}
      />
      <Counter
        totalInvited={props.totalInvited}
        numberAttending={props.numberAttending}
        numberUnconfirmed={props.numberUnconfirmed}
      />

      <GuestList
        guests={props.guests}
        toggleConfirmation={props.toggleConfirmation}
        toggleEditing={props.toggleEditing}
        setName={props.setName}
        isFiltered={props.isFiltered}
        removeGuest={props.removeGuest}
        pendingGuest={props.pendingGuest}
      />
    </div>
  );
};

export default MainContent;

MainContent.propTypes = {
  toggleFilter: PropType.func.isRequired,
  isFiltered: PropType.bool.isRequired,
  totalInvited: PropType.number.isRequired,
  numberAttending: PropType.number.isRequired,
  numberUnconfirmed: PropType.number.isRequired,
  guests: PropType.array.isRequired,
  toggleConfirmation: PropType.func.isRequired,
  toggleEditing: PropType.func.isRequired,
  setName: PropType.func.isRequired,
  removeGuest: PropType.func.isRequired,
  pendingGuest: PropType.string.isRequired
};
