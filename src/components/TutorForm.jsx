import React, { Component } from "react";
import "../styles/Tutor.scss";

class TutorForm extends Component {
    
  handleClick = e => {
    /* prevent the button to submit info */
    console.log("button clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div className="tutor__form">
        <h1>Nuevo Monitor</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstname}
            />
          </div>

          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastname}
            />
          </div>

          <div className="form-group">
            <label>Correo</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Materia a cargo</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="subject"
              value={this.props.formValues.subject}
            />
          </div>

          <button onClick={this.handleClick} className="btn float-right">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default TutorForm;
