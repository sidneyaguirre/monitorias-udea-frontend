import React, { Component } from "react";
import "../../styles/Tutor/Tutor.scss";

class NewTutorForm extends Component {
  handleClick = e => {
    /* prevent the button to submit info */
    console.log("button clicked");
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <div className="col">
            <h3 className="h3 text-primary">¡Regístrate!</h3>
            <p className="lead">
              Para registrarte como nuevo monitor sólo debes llenar el siguiente
              formulario. <br /> Todos los campos son requeridos
            </p>
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>
              <>Nombre</>
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
        </div>

        <div className="col">
        <div className="form-group">
          <label>
            <>Apellido</>
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
        </div>

        <div className="col">
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <label className="mr-sm-2">
                <>Tipo de Documento</>
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
                <>Número de Documento</>
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
        </div>

       <div className="col">
       <div className="form-group">
          <label>
            <>Correo Institucional</>
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
       </div>

        <div className="col">
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <label>
                <>Contraseña</>
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
              <div className="form-group">
              <label>
                <>Confirmar Contraseña</>
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
        </div>
        </div>

        <button
          onClick={this.handleClick}
          className="btn btn-outline-primary float-right"
        >
          Guardar
        </button>
      </form>
    );
  }
}

export default NewTutorForm;
