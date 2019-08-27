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
        <p>
          Para Registrarte como nuevo monitor sólo debes llenar el siguiente
          formulario. <br /> Todos los campos son requeridos
        </p>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>
              <strong>Nombre</strong>
            </label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              maxLength="20"
              value={this.props.formValues.firstname}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <strong>Apellido</strong>
            </label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              maxLength="20"
              value={this.props.formValues.lastname}
              required
            />
          </div>

          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <label className="mr-sm-2">
                  <strong>Tipo de Documento</strong>
                </label>
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

              <div className="col">
                <label className="mr-sm-2">
                  <strong>Número de Documento</strong>
                </label>
                <input
                  onChange={this.props.onChange}
                  type="number"
                  className="form-control"
                  name="documentNumber"
                  min="1"
                  maxLength="10"
                  value={this.props.formValues.documentNumber}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>
              <strong>Correo Institucional</strong>
            </label>
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
            <div className="form-row">
              <div className="col">
                <label>
                  <strong>Contraseña</strong>
                </label>
                <input
                  onChange={this.props.onChange}
                  type="password"
                  className="form-control"
                  name="password1"
                  maxLength="20"
                  value={this.props.formValues.password}
                  required
                />
              </div>

              <div className="col">
                <label>
                  <strong>Confirmar Contraseña</strong>
                </label>
                <input
                  onChange={this.props.onChange}
                  type="password"
                  className="form-control"
                  name="password2"
                  maxLength="20"
                  value={this.props.formValues.password}
                  required
                />
              </div>
            </div>
          </div>

          <button
            onClick={this.handleClick}
            className="btn btn-primary float-right"
          >
            Guardar
          </button>
        </form>
      </div>
    );
  }
}

export default TutorForm;
