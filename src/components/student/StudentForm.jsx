import React, { Component } from "react";

class StudentForm extends Component {
  handleClick = e => {
    /* prevent the button to submit info */
    console.log("button clicked");
  };

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
            <div className="form-group">
              <label htmlFor="name">Nombres</label>
              <input 
              type="text" 
              onChange={this.props.onChange}
              className="form-control" 
              name="name"
              value={this.props.formValues.name} />
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

        <div className="row p-0">
          <div className="col">
            <div className="form-group">
              <label htmlFor="type">Tipo de documento</label>
              <select id="type" className="form-control" name="type" value={this.props.formValues.type}>
                <option value="">Elige un tipo de documento...</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="TI" >Tarjeta de identidad</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="number">Número</label>
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

        <div className="row p-0">
          <div className="col">
            <div className="form-group ">
              <label htmlFor="email">Email</label>

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
           
          </div>
        </div>

        <div className="row p-0">
          <div className="col"></div>
          <div className="col">
            <button
              onClick={this.handleClick}
              className="btn btn-primary float-right"
            >
              Guardar
            </button>
          </div>
        </div>
      
      </form>
    );
  }
}

export default StudentForm;
