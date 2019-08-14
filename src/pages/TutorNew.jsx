import React, { Component } from "react";

import "../styles/Tutor.scss";
import TutorForm from "../components/TutorForm";

const initialState = {
  form: {
    documentType: "",
    documentNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    courseId: ""
  }
};

class TutorNew extends Component {
  state = {
    form: {
      documentType: "",
      documentNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      courseId: ""
    }
  };

  //createCourse = async courseInfo => {};

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
    this.createTutor(this.state.form)
    .then(() => {this.setState(initialState)}
    );    
  };

  createTutor = async info => {
    var url =
      "https://monitorias-backend.herokuapp.com/api/v1/users/createInstructor";
    var data = {
      documentType: info.documentType,
      documentNumber: info.documentNumber,
      firstName: info.firstName,
      lastName: info.lastName,
      email: info.email,
      idMateriaxinstructor: info.courseId
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
            <TutorForm
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

export default TutorNew;
