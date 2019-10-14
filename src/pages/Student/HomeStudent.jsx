import React, { Component } from "react";
import Modal from "../../components/common/Modal";
import FullCalendarU from "../../components/common/FullCalendar";
import SideBarStudent from "../../components/Student/SideBarStudent";
import {  subscribeToCalendar } from "../../CalendarApi";
import { GoogleAuthorize } from "react-google-authorize";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

class HomeStudent extends Component {
  state = {
    error: {
      show: false,
      title: "Error",
      message: "No se pudo guardar la asistencia, por favor intenta nuevamente."
    },
    events : {googleCalendarId: 
        "udea.edu.co_p4ikmikl93v651ht93k5ron768@group.calendar.google.com" },
    calendars: [],
    selected: {}
  };
  
  componentDidMount() {
    const calendars = JSON.parse(localStorage.getItem("calendars"));
    this.setState({ calendars });
    const selected = calendars[0];
    this.setState({ selected  });
    const selectedInfo = { total: calendars.length, index: 0}
    this.setState({ selectedInfo  });
    console.log(selected);
  }

  nextCalendar = e => {
   const total = this.state.selectedInfo.total;
   const actual = this.state.selectedInfo.index;
   const calendars = this.state.calendars;
   if ( actual < total - 1) {
    const selected = calendars[actual + 1];
    this.setState({ selected });
    const selectedInfo = { total: calendars.length, index: actual + 1}
    this.setState({ selectedInfo  });
   }
  }

  previusCalendar = e => {
    const actual = this.state.selectedInfo.index;
    const calendars = this.state.calendars;
    if ( actual > 0) {
      const selected = calendars[actual - 1];
      this.setState({ selected  });
      const selectedInfo = { total: calendars.length, index: actual - 1}
      this.setState({ selectedInfo  });
      this.setState({ googleCalendarId: selected.googleId });
    }
   }

  failResponseGoogle = response => {
    console.log(response);
    this.setState({ error: { ...this.state.error, show: true } });
  };

  sucessResponseGoogle = response => {
    console.log(response);
    subscribeToCalendar(this.state.selected.events.googleCalendarId, response.access_token);
  };

  handleCloseModal = childData => {
    this.setState({ error: { ...this.state.error, show: false } });
  };

  render() {
    return (
      <div>
        {this.state.error.show ? (
          <Modal error={this.state.error} closeModal={this.handleCloseModal} />
        ) : (
          ""
        )}
        <div className="row p-0 py-1">
          <div className="col-1">
            <SideBarStudent></SideBarStudent>
          </div>

          <div className="col-11 px-5">
            <div className="row  pt-4  row justify-content-end">
              <div className="col col-sm-8">
                <h4 className="h4 text-primary">Calendario</h4>
                <p className="lead is-font-small">
                  Encuentra todas las asesorías a los cursos que sigues.
                </p>
              </div>
              <div className="col">
                <GoogleAuthorize
                  clientId="754018758774-sds3anaedk5u7msh5m22rm6ujtsl07nn.apps.googleusercontent.com"
                  buttonText="Authorize"
                  scope="openid https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.settings.readonly"
                  onSuccess={this.sucessResponseGoogle}
                  onFailure={this.failResponseGoogle}
                  render={renderProps => {
                    return (
                      <button
                        className="btn btn-light btn-md"
                        type="button"
                        onClick={renderProps.onClick}
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/google-calendar.png"
                          height="25px"
                          alt="cal"
                        ></img>
                        &nbsp; Guardar en mi calendario
                      </button>
                    );
                  }}
                />
              </div>
            </div>

            <div className="row title justify-content-md-center">
              <div className="column">
                <MdChevronLeft onClick={this.previusCalendar} /> &nbsp;
                <span className="is-open-sans is-font-weight-800 mt-4">
                  {this.state.selected.name}
                </span>{" "}
                &nbsp;
                <MdChevronRight onClick={this.nextCalendar} /> &nbsp;
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className="col">
                <FullCalendarU googleCalendarId={this.state.selected.events}></FullCalendarU>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeStudent;
