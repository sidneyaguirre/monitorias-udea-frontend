import React, { Component } from "react";
import "../../styles/Tutor/Tutor.scss";
import SelectCourse from "../Tutor/selectCourse";

class CreateCourseForm extends Component {
  handleClick = e => {
    console.log("button clicked");
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-row">
        <div className="col">
          <h3 className="h3 text-primary">Agregar Monitoría</h3>
          <p className="lead">
            Para registrar una nueva monitoría sólo debes llenar el siguiente
            formulario. <br /> Todos los campos son requeridos
          </p>
        </div>
        </div>
        

        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label>Nombre del Curso</label>
              <SelectCourse
                onChange={this.props.onChange}
                className="form-control"
                name="subjectId"
                required
                subjects={this.props.formValues.courses}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col">
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
          </div>

          <div className="col">
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
          </div>
        </div>

        <div className="form-group">
          <label>Semestre en que serás monitor</label>
          <div className="form-row">
            <div className="col">
              <input
                onChange={this.props.onChange}
                type="text"
                className="form-control"
                name="year"
                value={this.props.formValues.year}
                placeholder="año"
                required
              />
            </div>

            <div className="col-1 text-center">
              <p>-</p>
            </div>

            <div className="col">
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
        </div>

        <div className="form-group">
          <label>Descripción del curso</label>
          <textarea
            onChange={this.props.onChange}
            type="text"
            className="form-control"
            name="description"
            value={this.props.formValues.form.description}
            required
          />
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

export default CreateCourseForm;
