import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../common/Modal";
import ModalEvent from "../common/ModalEvent";
import Spinner from "../common/Spinner";
import { subscribeToEvent } from "../../CalendarApi";
class FullCalendarU extends Component {
  state = {
    showAttendToEvent: false,
    event: {},
    loading: false,
    error: {
      show: false,
      title: "Error",
      message: "Ha ocurrido un error, intenta nuevamente"
    }
  };

  handleEventClick = info => {
    info.jsEvent.preventDefault();
    console.log(info);
    this.setState({ event: info.event });

    this.setState({ showAttendToEvent: true });
  };

  handleCloseModalEvent = childData => {
    this.setState({ showAttendToEvent: false });
  };

  handleCloseModal = childData => {
    this.setState({ error: { ...this.state.erro, show: false } });
  };

  handleAssitence = childData => {
    this.setState({ showAttendToEvent: false });
    this.setState({ loading: true });
    subscribeToEvent(this.state.event)
      .then(res => res.json())
      .then(response => {
        if (response.status === "confirmed") {
          setTimeout(() => {
            this.setState({ loading: false });
            this.setState({
              error: {
                title: "!Genial!",
                message: "El evento ha sido agregado a tu cuenta",
                show: true
              }
            });
          }, 3000);
        } else {
          this.setState({ loading: false });
          this.setState({
            error: {
              title: "Error",
              message: "Ha ocurrido un error, intenta nuevamente",
              show: true
            }
          });
        }
        console.log("Success:", response);
      });
  };

  render() {
    return (
      <div className="pb-4 mb-4">
        {this.state.loading ? <Spinner /> : " "}

        {this.state.error.show ? (
          <Modal error={this.state.error} closeModal={this.handleCloseModal} />
        ) : (
          ""
        )}

        {this.state.showAttendToEvent ? (
          <ModalEvent
            event={this.state.event}
            closeModal={this.handleCloseModalEvent}
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
