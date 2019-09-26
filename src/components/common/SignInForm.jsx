import React, { Component } from 'react';

class SignInForm extends Component {


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
        <div className="row p-0 is-font-small">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="firstName">Usuario </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
              />
            </div>
          </div>       
        </div>
        <div className="row p-0 is-font-small">
          <div className="col-md-8">
            <div className="form-group">
              <label htmlFor="firstName">Contraseña </label>
              <input
                type="text"
                className="form-control"
                name="firstName"
              />
            </div>
          </div>       
        </div>
      </form>
    );
  }
}

export default SignInForm;