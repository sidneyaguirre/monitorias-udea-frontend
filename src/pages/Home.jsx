import React, { Component } from "react";
import "../styles/Home.scss";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../components/common/Modal";

class Home extends Component {
  state = {
    showAttendToEvent: false,
    message: {
      title: "¿Deseas asistir al evento?",
      buttonText: "Asistir"
    },
    event: {},
    events: {
      googleCalendarId:
        "udea.edu.co_dfnfe05o2h67cc8hem94qhmdrg@group.calendar.google.com",
      className: "gcal-event"
    }
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
            <FullCalendar
              height={550}
              width={450}
              className="bg-light"
              googleCalendarApiKey="AIzaSyAB8stIFlYsrJ_v4fXfLkn4k58D-0d_3kY"
              defaultView="dayGridMonth"
              googleCalendarId="udea.edu.co_dfnfe05o2h67cc8hem94qhmdrg@group.calendar.google.com"
              events={this.state.events}
              eventClick={this.handleEventClick}
              plugins={[
                googleCalendarPlugin,
                dayGridPlugin,
                bootstrapPlugin,
                interactionPlugin
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
