import React, { Component } from "react";

class StudentForm extends Component {
  validation = {
    nameError: "",
    lastNameError: "",
    numberError: "",
    emailError: "",
    documentTypeError: "",
    documentNumberError: "",
    passwordError: "",
    confirmPasswordError:""
  };

  handleClick = e => {
    e.preventDefault();    
    this.validateForm();
    
    console.log("button clicked");
  };

  validateForm = () => {
    if(!this.props.formValues.name){
      console.log('No hay ');
      
    }

  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(this.props);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row p-0">
          <div className="col">
            <h3 className="h3 text-primary">¡Regístrate!</h3>
            <p className="lead">
              Bienvenid@ a Monitorías UdeA, solo necesitamos los siguientes
              datos para que puedas empezar.              
            </p>
          </div>
        </div>

        <div className="row p-0 is-font-small">
          <div className="col">
            <div className="form-group">
              <label htmlFor="name">Nombres</label>
              <input
                type="text"
                onChange={this.props.onChange}
                className="form-control"
                name="name"
                value={this.props.formValues.name}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="lastName">Apellidos</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={this.props.onChange}
                value={this.props.formValues.lastName}
              />
            </div>
          </div>
        </div>

        <div className="row p-0 row p-0 is-font-small">
          <div className="col">
            <div className="form-group">
              <label htmlFor="type">Tipo de documento</label>
              <select id="type" className="form-control" name="type">
                <option value="">    </option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="TI">Tarjeta de identidad</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="number">Número de documento</label>
              <input
                type="text"
                className="form-control"
                name="number"
                onChange={this.props.onChange}
                value={this.props.formValues.number}
              />
            </div>
          </div>
        </div>

        <div className="row p-0 row p-0 is-font-small">
          <div className="col">
            <div className="form-group ">
              <label htmlFor="email">Correo universitario</label>

              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.props.onChange}
                value={this.props.formValues.email}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                onChange={this.props.onChange}
                className="form-control"
                name="password"
                value={this.props.formValues.password}
              />
            </div>
          </div>
        </div>

        <div className="row p-0 is-font-small">
          
          <div className="col">
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirma tu contraseña</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={this.props.onChange}
                value={this.props.formValues.confirmPassword}
              />
            </div>
          </div>
          <div className="col align-self-center " >
            <button
              onClick={this.handleClick}
              className="btn btn-primary w-75 float-right"
            >
              Empezar
            </button>
          </div>
        </div>

        <div className="row p-0">
          <div className="col" />
         
        </div>
      </form>
    );
  }
}

export default StudentForm;
