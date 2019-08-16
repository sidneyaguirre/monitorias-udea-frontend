import React, { Component } from "react";

import "../../styles/Tutor/Tutor.scss";
import CreateCourseForm from "../../components/Tutor/CreateCourseForm";

const initialState = {
  form: {
    subjectId: "",
    documentNumber: "",
    semester: "",
    description: ""
  }
};

class CourseTutorNew extends Component {
  state = {
    form: {
      subjectId: "",
      documentNumber: "",
      semester: "",
      description: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        /* we get the previous values in the form*/
        ...this.state.form,
        /* and add a new one */
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
    this.createCourse(this.state.form).then(() => {
      this.setState(initialState);
    });
  };

  createCourse = async info => {
    var url =
      "https://monitorias-backend.herokuapp.com/api/v1/cursos/createCurso";
    var data = {
      idMateria: info.subjectId,
      idInstructor: info.documentNumber,
      semester: info.semester,
      description: info.description
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <CreateCourseForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CourseTutorNew;
