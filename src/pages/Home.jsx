import React, { Component } from "react";
import "../styles/Home.scss";
import Modal from "../components/common/Modal";
import FullCalendarU from "../components/common/FullCalendar";

class Home extends Component {
  state = {
    showAttendToEvent: false,
    message: {
      title: "¿Deseas asistir al evento?",
      buttonText: "Asistir"
    },
    events: [
      {
        googleCalendarId:
          "udea.edu.co_hci7t4u4ff5r2l5h51fsupetd8@group.calendar.google.com"
      },
      {
        googleCalendarId:
          "udea.edu.co_4lt748tor6pkd89v2novt75g4o@group.calendar.google.com"
      },
      {
        googleCalendarId:
          "udea.edu.co_p4ikmikl93v651ht93k5ron768@group.calendar.google.com"
      },
      {
        googleCalendarId:
          "udea.edu.co_ti5ublk9ai6d0fh21t3iidnnls@group.calendar.google.com"
      }
    ]
  };

  handleEventClick = info => {
    info.jsEvent.preventDefault();
    console.log(info);
    this.setState({ event: info.event });

    this.setState({ showAttendToEvent: true });
  };

  handleCloseModal = childData => {
    this.setState({ showAttendToEvent: false });
  };

  handleAssitence = childData => {
    console.log(" accepted");
  };

  render() {
    return (
      <div>
        {this.state.showAttendToEvent ? (
          <Modal
            error={this.state.message}
            closeModal={this.handleCloseModal}
            actionClicked={this.handleAssitence}
          />
        ) : (
          ""
        )}
        <div className="row title justify-content-md-center">
          <div className="column">
            <p className="is-open-sans is-font-weight-800 mt-4">Calendario</p>
          </div>
        </div>
        <div className="row justify-content-md-center mb-4 pb-4">
          <div className="column">
            <FullCalendarU
              googleCalendarId={this.state.events}
            ></FullCalendarU>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
