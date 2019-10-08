import React, { Component } from "react";
import ReactDOM from "react-dom";

import NewTutorForm from "../../components/Tutor/NewTutorForm";
import tutorNewImg from "../../assets/voice_interface.svg";
import "../../styles/Tutor/Tutor.scss";

const initialState = {
  form: {
    documentType: "",
    documentNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: ""
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
      password1: "",
      password2: ""
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

  handlePasswords = (password1, password2) => {
    if (password1 !== password2) {
      return false;
    } else {
      return true;
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
    this.createTutor(this.state.form).then(() => {
      this.setState(initialState.form);
    });
  };

  unequalPasswordsAlert = () => {
    ReactDOM.render(
      <h4>Las contraseñas no coinciden</h4>,
      document.getElementById("passwordAlert")
    );
  };

  createTutor = async info => {
    var url =
      "https://monitorias-backend.herokuapp.com/api/v1/users/createInstructor";
    var equalPasswords = this.handlePasswords(info.password1, info.password2);
    var data = {
      documentType: info.documentType,
      documentNumber: info.documentNumber,
      firstName: info.firstName,
      lastName: info.lastName,
      email: info.email,
      password: ""
    };
    if (equalPasswords) {
      data.password = info.password2;
    } else {
      this.unequalPasswordsAlert();
    }
    console.log(data);
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
      <div className="container">
        <div className="row p-4 pt-5 h-100">
          <div className="col-sm align-self-center text-center">
            <img className="w-50" src={tutorNewImg} alt="new tutor" />
          </div>
          <div className="col-sm">
            <NewTutorForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              className="col"
            />
            <div id="passwordAlert"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TutorNew;
