import React, { Component } from "react";

import "../styles/Tutor.scss";
import TutorForm from "../components/TutorForm";
//import api from "../api"

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
    console.log(this.state);
    var url = "https://monitorias-backend.herokuapp.com/api/v1/users/createInstructor";
    var data = {
      documentType: this.state.form.documentType,
      documentNumber: this.state.form.documentNumber,
      firstName: this.state.form.firstName,
      lastName: this.state.form.lastName,
      email: this.state.form.email,
      idMateriaxinstructor: this.state.form.courseId
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
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
