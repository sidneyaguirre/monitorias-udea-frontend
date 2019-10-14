import React, { Component } from "react";
import Modal from "../../components/common/Modal";
import SideBarStudent from "../../components/Student/SideBarStudent";
import { MdAdd } from "react-icons/md";

class Subjects extends Component {
  state = {
    error: {
      show: false,
      title: "Error",
      message: "No se pudo guardar la asistencia, por favor intenta nuevamente."
    },
    subjects: [
      {
        name: "Física de campos",
        events: {googleCalendarId:
          "udea.edu.co_ti5ublk9ai6d0fh21t3iidnnls@group.calendar.google.com"},
        class: "alert-light",
        selected: false
      },
      {
        name: "Física mecánica",
        events: {googleCalendarId:
          "udea.edu.co_hci7t4u4ff5r2l5h51fsupetd8@group.calendar.google.com"},
        class: "alert-light",
        selected: false
      },
      {
        name: "Álgebra vectorial",
        events: {googleCalendarId:
          "udea.edu.co_4lt748tor6pkd89v2novt75g4o@group.calendar.google.com"},
        class: "alert-light",
        selected: false
      },
      {
        name: "Álgebra lineal",
        events: {googleCalendarId:
          "udea.edu.co_p4ikmikl93v651ht93k5ron768@group.calendar.google.com"},
        class: "alert-light",
        selected: false
      }
    ]
  };

  handleCloseModal = childData => {
    this.setState({ error: null });
  };

  addSubject = (subject, index) => {
    let subjects = [...this.state.subjects];
    subjects[index].selected = !subject.selected;
    subjects[index].class = subject.selected
      ? "alert-primary border-0"
      : "alert-light";
    this.setState({ ...this.state, subjects });
  };

  goToCalendar = () => {
    let calendars = [];
    this.state.subjects.forEach(subject => {
      if (subject.selected) {
        calendars.push(subject);
      }
    });
    localStorage.setItem("calendars", JSON.stringify(calendars));
    this.props.history.push("/student/home");
  };

  render() {
    return (
      <div>
        {this.state.error.show ? (
          <Modal error={this.state.error} closeModal={this.handleCloseModal} />
        ) : (
          ""
        )}
        <div className="row p-0 pt-3">
          <div className="col-1">
            <SideBarStudent></SideBarStudent>
          </div>

          <div className="col-11 px-5">
            <div className="row pl-1 ">
              <div className="col">
                <h4 className="h4 text-primary">Materias</h4>
                <p className="lead is-font-small">
                  Agrega las materias en las que estas interesado y encuentra
                  los horarios de las asesorias programadas.
                </p>
              </div>
            </div>

            <div className="row py-0 pl-0 pt-1">
              <div className="">
                {" "}
                {this.state.subjects.map((subject, index) => (
                  <div
                    className={" d-block alert d-block " + subject.class}
                    onClick={() => this.addSubject(subject, index)}
                    role="alert"
                    key={index}
                  >
                    {subject.name} &nbsp;
                    <MdAdd />
                  </div>
                ))}
              </div>
            </div>

            <div className="row p-0 justify-content-md-center">
              <div className="col pl-4 pt-4">
                <button
                  className="btn  btn-outline-primary"
                  onClick={this.goToCalendar}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subjects;
