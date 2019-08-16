import React, { Component } from "react";
import "../../styles/Tutor/Tutor.scss";

class CreateCourseForm extends Component {

  handleClick = e => {
    console.log("button clicked");
  };

  render() {
    return (
      <div className="coursetutor__form">
        <h1>Nuevo Curso</h1>
        <p>Este espacio te permite crear un nuevo curso como monitor</p>
        
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Código de la materia de la que serás monitor</label>
            <input
              onChange={this.props.onChange}
              type="number"
              className="form-control"
              name="subjectId"
              value={this.props.formValues.subjectId}
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
            <label>Semestre en que serás monitor</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="semester"
              value={this.props.formValues.semester}
              required
            />
          </div>

          <div className="form-group">
            <label>Descripción del curso</label>
            <textarea
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="description"
              value={this.props.formValues.description}
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

export default CreateCourseForm;
