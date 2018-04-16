// Global Imports
import React, { Component } from "react";

// Local Imports
import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {
  // ES2017 doesn't need constructor() anymore
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };
  // function that takes an Index and finds the cooresponding element in array
  // and flips value of isConfirmed. Also takes property argument to handle
  // isConfirmed or isEditing
  toggleGuestProperty = (property, id) => {
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
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
  toggleConfirmation = id => this.toggleGuestProperty("isConfirmed", id);
  // NEW REMOVE WITH ID.
  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });
  // =====================================================
  //           OLD Way before changing to ID
  // =====================================================
  // // Removes Guest on button click.
  // removeGuestAt = index =>
  //   this.setState({
  //     guests: [
  //       //Every guest before the one we want to remove
  //       ...this.state.guests.slice(0, index),
  //       //Everything after the removed element
  //       ...this.state.guests.slice(index + 1)
  //     ]
  //   });
  // Check if the isEditing has been clicked on or off and pass to toggleGuestPropertyAt
  toggleEditing = id => this.toggleGuestProperty("isEditing", id);

  // Handle Name Edits
  setName = (name, id) => {
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
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

  // New with Guest ID:
  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    });
  };

  // =====================================================
  //           OLD Way before changing to ID
  // =====================================================
  // newGuestSubmitHandler = e => {
  //   e.preventDefault();
  //   this.setState({
  //     guests: [
  //       {
  //         name: this.state.pendingGuest,
  //         isConfirmed: false,
  //         isEditing: false
  //       },
  //       ...this.state.guests
  //     ],
  //     pendingGuest: ""
  //   });
  // };

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
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
