// Global Imports
import React, { Component } from "react";

// Local Imports
import "./App.css";
import GuestList from "./GuestList";

class App extends Component {
  // ES2017 doesn't need constructor() anymore
  state = {
    isFiltered: false,
    guests: [
      {
        name: "Ryan",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Whitney",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Adam",
        isConfirmed: false,
        isEditing: true
      }
    ]
  };
  // function that takes an Index and finds the cooresponding element in array
  // and flips value of isConfirmed. Also takes property argument to handle
  // isConfirmed or isEditing
  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  };

  // Check if the isConfirmed has been clicked on or off and pass to toggleGuestPropertyAt
  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);
  // Check if the isEditing has been clicked on or off and pass to toggleGuestPropertyAt
  toggleEditingAt = index => this.toggleGuestPropertyAt("isEditing", index);

  // Handle Name Edits
  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });
  };

  // Filter the list. Basically Reversing the value of isFiltered
  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  getTotalInvited = () => this.state.guest.length;

  // getAttendingGuests = () =>

  // getUnconfirmedGuest = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">
              Submit
            </button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              />{" "}
              Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>

          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
          />
        </div>
      </div>
    );
  }
}

export default App;
