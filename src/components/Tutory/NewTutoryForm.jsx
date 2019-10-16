import React, { Component } from "react";
import "../../styles/Tutor/Tutor.scss";
import SelectCourse from "../Tutor/selectCourse";

class NewTutoryForm extends Component {
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
              formulario.
            </p>
            <p className="lead is-font-small">
              Todos los campos son requeridos
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
                name="name"
                required
                subjects={this.props.formValues.courses}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label>Lugar de la Asesoría</label>
              <input
                onChange={this.props.onChange}
                className="form-control"
                name="place"
                required
                value={this.props.formValues.form.place}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Fecha de la Asesoría</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={this.props.formValues.form.date}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label>Hora de Inicio</label>
              <input
                type="time"
                className="form-control"
                name="timeInit"
                value={this.props.formValues.form.timeInit}
                required
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Hora de terminación</label>
              <input
                type="time"
                className="form-control"
                name="timeEnd"
                value={this.props.formValues.form.timeEnd}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Semestre de la monitoría</label>
          <div className="form-row">
            <div className="col">
              <input
                onChange={this.props.onChange}
                type="text"
                className="form-control"
                name="year"
                value={this.props.formValues.form.year}
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
                value={this.props.formValues.form.semester}
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

        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label>Tipo de Documento - Monitor</label>
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
                <option value="CE">Cédula de Extranjería</option>
                <option value="TI">Tarjeta de Identidad</option>
              </select>
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Número de Documento - Monitor</label>
              <input
                onChange={this.props.onChange}
                type="number"
                className="form-control"
                name="idInstructor"
                value={this.props.formValues.form.idInstructor}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <div className="form-group">
              <label>Nombre del monitor</label>
              <input
                onChange={this.props.onChange}
                type="number"
                className="form-control"
                name="nameInstructor"
                value={this.props.formValues.form.nameInstructor}
                required
              />
            </div>
          </div>
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

export default NewTutoryForm;
