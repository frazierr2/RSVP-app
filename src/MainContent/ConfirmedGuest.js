import React from "react";
import PropTypes from "prop-types";

const ConfirmedGuest = props => {
  return (
    <div>
      <h2>Invitees</h2>
      <label>
        <input
          type="checkbox"
          onChange={props.toggleHide}
          checked={props.isFiltered}
        />{" "}
        Hide those who haven't responded
      </label>
    </div>
  );
};

ConfirmedGuest.propTypes = {
  toggleHide: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
};

export default ConfirmedGuest;
