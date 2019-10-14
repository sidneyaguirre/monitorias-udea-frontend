import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../common/ModalEvent";

class FullCalendarU extends Component {
  state = {
    showAttendToEvent: false,
    event: {}
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
      <div className="pb-4 mb-4">
        {this.state.showAttendToEvent ? (
          <Modal
            event={this.state.event}
            closeModal={this.handleCloseModal}
            actionClicked={this.handleAssitence}
          />
        ) : (
          ""
        )}

        <FullCalendar
          height={550}
          googleCalendarApiKey="AIzaSyAB8stIFlYsrJ_v4fXfLkn4k58D-0d_3kY"
          defaultView="dayGridMonth"
          className="gcal-event"
          eventClick={this.handleEventClick}
          eventSources={this.props.googleCalendarId}
          events={this.props.googleCalendarId}
          plugins={[googleCalendarPlugin, dayGridPlugin, interactionPlugin]}
        />
      </div>
    );
  }
}

export default FullCalendarU;
