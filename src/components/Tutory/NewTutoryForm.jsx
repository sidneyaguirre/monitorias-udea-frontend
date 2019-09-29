import { Component } from "react";

class NewTutoryForm extends Component {


  // ESTO ES LO MISMO QUE CREATE-COURSE-FORM ON TUTOR

  // handleClick = e => {
  //   /* prevent the button to submit info */
  //   console.log("button clicked");
  // };

  // render() {
  //   return (
  //     <form onSubmit={this.props.onSubmit}>
  //       <div className="col">
  //         <h3 className="h3 text-primary">Agregar Monitoría</h3>
  //         <p className="lead">
  //           Para registrar una nueva monitoría sólo debes llenar el siguiente
  //           formulario. <br /> Todos los campos son requeridos
  //         </p>
  //       </div>

  //       <div className="col">
  //         <div className="form-group">
  //           <label>Nombre del Curso</label>
  //           <input
  //             onChange={this.props.onChange}
  //             type="text"
  //             className="form-control"
  //             name="courseName"
  //             value={this.props.formValues.courseName}
  //             required
  //           />
  //         </div>
  //       </div>

  //       <div className="col">
  //         <div className="form-group">
  //           <label>Aula</label>
  //           <input
  //             onChange={this.props.onChange}
  //             type="text"
  //             className="form-control"
  //             name="classroom"
  //             value={this.props.formValues.classroom}
  //             required
  //           />
  //         </div>
  //       </div>

  //       <div className="col">
  //         <div className="form-group">
  //           <label>Tipo de Documento</label>
  //           <select
  //             onChange={this.props.onChange}
  //             type="text"
  //             className="form-control"
  //             name="documentType"
  //             value={this.props.formValues.documentType}
  //             required
  //           >
  //             <option value="">Selecione...</option>
  //             <option value="Active">Cédula de Ciudadanía</option>
  //             <option value="TI">Tarjeta de Identidad</option>
  //           </select>
  //         </div>
  //       </div>

  //       <div className="col">
  //         <div className="form-group">
  //           <label>Número de Documento</label>
  //           <input
  //             onChange={this.props.onChange}
  //             type="number"
  //             className="form-control"
  //             name="documentNumber"
  //             value={this.props.formValues.documentNumber}
  //             required
  //           />
  //         </div>
  //       </div>

  //       <div className="col">
  //         <div className="form-group">
  //           <label>Correo</label>
  //           <input
  //             onChange={this.props.onChange}
  //             type="email"
  //             className="form-control"
  //             name="email"
  //             value={this.props.formValues.email}
  //             required
  //           />
  //         </div>
  //       </div>

  //       <div className="col">
  //         <div className="form-group">
  //           <label>Código de Materia a cargo</label>
  //           <input
  //             onChange={this.props.onChange}
  //             type="number"
  //             className="form-control"
  //             name="courseId"
  //             value={this.props.formValues.courseId}
  //             required
  //           />
  //         </div>
  //       </div>

  //       <button onClick={this.handleClick} className="btn btn-outline-primary float-right">
  //         Guardar
  //       </button>
  //     </form>
  //   );
  // }
}

export default NewTutoryForm;
