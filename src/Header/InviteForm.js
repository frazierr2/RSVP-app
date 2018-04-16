import React from "react";
import PropTypes from "prop-types";

const InviteForm = props => {
  return (
    <form onSubmit={props.newGuestSubmitHandler}>
      <input
        type="text"
        value={props.pendingGuest}
        onChange={props.handleNameInput}
        placeholder="Invite Someone"
      />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default InviteForm;

InviteForm.proptType = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
  handleNameInput: PropTypes.func.isRequired
};
