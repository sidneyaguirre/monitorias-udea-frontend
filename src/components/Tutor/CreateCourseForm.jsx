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
            <div className="form-row">
              <input
                onChange={this.props.onChange}
                type="text"
                className="form-control col"
                name="year"
                value={this.props.formValues.year}
                placeholder="año"
                required
              />
              <div className="col-1 text-center"><p>-</p></div>
              <select
              onChange={this.props.onChange}
              type="text"
              className="form-control col"
              name="semester"
              value={this.props.formValues.semester}
              required
            >
              <option value="">Selecione...</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            </div>
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
