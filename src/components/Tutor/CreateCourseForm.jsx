import React, { Component } from "react";
import "../../styles/Tutor/Tutor.scss";
import SelectCourse from "../Tutor/selectCourse"

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
            <label>
              <strong>Materia</strong> de la que serás monitor
            </label>
            {/* <SelectCourse
              onChange={this.props.onChange}
              type="select"
              className="form-control"
              name="subjectId"
              required
              value={this.props.formValues.courses}
            /> */}
          </div>

          <div className="form-group">
            <label>
              <strong>Tipo de Documento</strong>
            </label>
            <select
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="documentType"
              value={this.props.formValues.form.documentType}
              required
            >
              <option value="">Selecione...</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              <strong>Número de Documento</strong>
            </label>
            <input
              onChange={this.props.onChange}
              type="number"
              className="form-control"
              name="documentNumber"
              value={this.props.formValues.form.documentNumber}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <strong>Semestre en que serás monitor</strong>
            </label>
            <div className="form-row">
              <input
                onChange={this.props.onChange}
                type="text"
                className="form-control col"
                name="year"
                value={this.props.formValues.form.year}
                placeholder=" Año"
                required
              />
              <div className="col-1 text-center">
                <p>-</p>
              </div>
              <select
                onChange={this.props.onChange}
                type="text"
                className="form-control col"
                name="semester"
                value={this.props.formValues.form.semester}
                required
              >
                <option value="">Selecione...</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>
              <strong>Descripción del curso</strong>
            </label>
            <textarea
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="description"
              value={this.props.formValues.form.description}
              required
            />
          </div>
          <p>***Debe pedir la contraseña del monitor***</p>

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

export default CreateCourseForm;
