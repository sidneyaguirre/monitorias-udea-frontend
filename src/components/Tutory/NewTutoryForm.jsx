import React, { Component } from 'react';

class NewTutoryForm extends Component {

/* body: {
	"idInstructor": "65465",
	"nameInstructor":"Luis",
	"nameSubscriptor":"eduardo",
	"email":"leduardo.ochoa@udea.edu.co",
	"state":"Active",
	"name":"Asesoria test",
	"description":"Testing asesoria",
	"place":"Aero",
	"semester":"2019-2",
	"date":"14-08-2019",
	"timeInit":"10:00AM",
	"timeEnd":"12:00PM"
}
 */

    handleClick = e => {
        /* prevent the button to submit info */
        console.log("button clicked");
      };
    
      render() {
        return (
          <div className="tutory__form">
            <h1>Nueva Monitoría</h1>
    
            <form onSubmit={this.props.onSubmit}>
              <div className="form-group">
                <label>Nombre del Curso</label>
                <input
                  onChange={this.props.onChange}
                  type="text"
                  className="form-control"
                  name="courseName"
                  value={this.props.formValues.courseName}
                  required
                />
              </div>
    
              <div className="form-group">
                <label>Aula</label>
                <input
                  onChange={this.props.onChange}
                  type="text"
                  className="form-control"
                  name="classroom"
                  value={this.props.formValues.classroom}
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
                  <option value="Active">Cédula de Ciudadanía</option>
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
    
              <button onClick={this.handleClick} className="btn float-right">
                Guardar
              </button>
            </form>
          </div>
        );
      }
}

export default NewTutoryForm;