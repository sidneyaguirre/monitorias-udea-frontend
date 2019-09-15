import React, { Component } from 'react';

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
              <label htmlFor="firstName">Nombres</label>
              <input
                type="text"
                onChange={this.props.onChange}
                className="form-control"
                name="firstName"
                value={this.props.formValues.firstName}
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
              <label htmlFor="documentType">Tipo de documento</label>
              <select id="type" className="form-control" name="documentType"
              value={this.props.formValues.documentType}
              onChange={this.props.onChange}>
                <option value="">    </option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="TI">Tarjeta de identidad</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="documentNumber">Número de documento</label>
              <input
                type="text"
                className="form-control"
                name="documentNumber"
                onChange={this.props.onChange}
                value={this.props.formValues.documentNumber}
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
              onClick={this.props.onSubmit}
              className="btn btn-primary w-75 float-right"
            >
              Empezar
            </button>
          
          </div>
          
        </div>

        <div className="row p-0">
          <div className="col">  <p className="lead is-font-small ">
                            ¿Ya tienes cuenta? Inicia sesión  
                            <a className="text-success" href="/" > aquí.</a>
              </p> </div>
         
        </div>
      </form>
    );
  }
}

export default StudentForm;
