import React, { Component } from 'react';

class NewCourseForm extends Component {


    handleClick = e => {
        /* prevent the button to submit info */
        console.log("button clicked");
      };
    
      render() {
        return (
          <div className="tutory__form">
            <h1>Nuevo Curso</h1>
    
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
                <label>Código de la Materia del Curso</label>
                <input
                  onChange={this.props.onChange}
                  type="text"
                  className="form-control"
                  name="courseId"
                  value={this.props.formValues.courseId}
                  required
                />
              </div>

              <div className="form-group">
                <label>Número de Documento del Monitor</label>
                <input
                  onChange={this.props.onChange}
                  type="number"
                  className="form-control"
                  name="tutorId"
                  value={this.props.formValues.tutorId}
                  required
                />
              </div>
    
              <div className="form-group">
                <label>Tipo de Asesoría</label>
                <select
                  onChange={this.props.onChange}
                  type="text"
                  className="form-control"
                  name="tutoryType"
                  value={this.props.formValues.tutoryType}
                  required              
                >
                  <option value="">Selecione...</option>
                  <option value="CC">Cédula de Ciudadanía</option>
                  <option value="TI">Tarjeta de Identidad</option>
                </select>
              </div>
    
              <div className="form-group">
                <label>Semestre</label>
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

export default NewCourseForm;