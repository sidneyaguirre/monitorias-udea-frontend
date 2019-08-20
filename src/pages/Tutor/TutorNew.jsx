import React, { Component } from "react";

import "../../styles/Tutor/Tutor.scss";
import TutorForm from "../../components/Tutor/TutorForm";

const initialState = {
  form: {
    courseId: "",
    documentType: "",
    documentNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
};

class TutorNew extends Component {
  state = {
    form: {
      courseId: "",
      documentType: "",
      documentNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
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
    this.createTutor(this.state.form).then(() => {
      this.setState(initialState);
    });
  };

  createTutor = async info => {
    var url =
      "https://monitorias-backend.herokuapp.com/api/v1/users/createInstructor";
    var data = {
      idMateriaxinstructor: info.courseId,
      documentType: info.documentType,
      documentNumber: info.documentNumber,
      firstName: info.firstName,
      lastName: info.lastName,
      email: info.email,
      password: info.password
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
        <div className="container" />
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
