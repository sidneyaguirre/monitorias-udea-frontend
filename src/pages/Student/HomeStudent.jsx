import React, { Component } from "react";
import Modal from "../../components/common/Modal";
import FullCalendarU from "../../components/common/FullCalendar";
import SideBarStudent from "../../components/Student/SideBarStudent";
import { getCalendarList } from "../../CalendarApi";

import { GoogleAuthorize } from "react-google-authorize";

class HomeStudent extends Component {
  state = {
    error: {
      title: "Error",
      message: "No se pudo guardar la asistencia, por favor intenta nuevamente."
    },
    events: []
  };

  failResponseGoogle = response => {
    console.log(response);
  };

  sucessResponseGoogle = response => {
    console.log(response);
    getCalendarList(response.access_token);
  };

  handleCloseModal = childData => {
    this.setState({ error: null });
  };

  render() {
    return (
      <div>
        {this.state.error ? 
          <Modal error={this.state.error} closeModal={this.handleCloseModal} />
         : 
          ""
        }
        <div className="row p-0 py-1">
          <div className="col-1">
            <SideBarStudent></SideBarStudent>
          </div>

          <div className="col-11 px-5">
              <div className="row pl-1 ">
                <div className="col">
                  <h4 className="h4 text-primary">Calendario</h4>
                  <p className="lead is-font-small">
                    Encuentra todas las asesorías a los cursos que sigues.
                  </p>
                </div>
              </div>

            <div className="row pl-1">
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
                          height="30px"
                          alt="cal"
                        ></img>
                        &nbsp; Ver calendario
                      </button>
                    );
                  }}
                />
              </div>
            </div>

            <div className="row pl-1">
              <div className="col">
                  <FullCalendarU
                  events={this.state.events}>
                  </FullCalendarU>
                </div>
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HomeStudent;
