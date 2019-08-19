import React, { Component } from "react";
import "../../styles/Tutor/Tutor.scss";

class TutorForm extends Component {

  handleClick = e => {
    /* prevent the button to submit info */
    console.log("button clicked");
  };

  render() {
    return (
      <div className="tutor__form">
        <h1>Nuevo Monitor</h1>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstname}
              required
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
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo de Documento</label>
            <select
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="documentType"
              value={this.props.formValues.documentType}
              required              
            >
              <option value="">Selecione...</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
            </select>
          </div>

          <div className="form-group">
            <label>Número de Documento</label>
            <input
              onChange={this.props.onChange}
              type="number"
              className="form-control"
              name="documentNumber"
              value={this.props.formValues.documentNumber}
              required
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
              required
            />
          </div>

          <div className="form-group">
            <label>Código de Materia a cargo</label>
            <input
              onChange={this.props.onChange}
              type="number"
              className="form-control"
              name="courseId"
              value={this.props.formValues.courseId}
              required
            />
          </div>
          
          <button onClick={this.handleClick} className="btn btn-primary float-right">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default TutorForm;
