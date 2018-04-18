import React from "react";
import PropTypes from "prop-types";

import InviteForm from "./InviteForm";

const Header = props => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>App based off Treehouse project</p>
      <InviteForm
        newGuestSubmitHandler={props.newGuestSubmitHandler}
        pendingGuest={props.pendingGuest}
        handleNameInput={props.handleNameInput}
      />
    </header>
  );
};

export default Header;

Header.proptType = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
};
