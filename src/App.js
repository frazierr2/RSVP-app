// Global Imports
import React, { Component } from "react";

// Local Imports
import "./App.css";
import GuestList from "./GuestList";
import Counter from "./Counter";

class App extends Component {
  // ES2017 doesn't need constructor() anymore
  state = {
    isFiltered: false,
    pendingGuest: "",
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
  // Removes Guest on button click.
  removeGuestAt = index =>
    this.setState({
      guests: [
        //Every guest before the one we want to remove
        ...this.state.guests.slice(0, index),
        //Everything after the removed element
        ...this.state.guests.slice(index + 1)
      ]
    });
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

  handleNameInput = e => this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    });
  };

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );

  render() {
    // Called in render to update count when DOM rerenders
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form onSubmit={this.newGuestSubmitHandler}>
            <input
              type="text"
              value={this.state.pendingGuest}
              onChange={this.handleNameInput}
              placeholder="Invite Someone"
            />
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
          <Counter
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
          />

          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
