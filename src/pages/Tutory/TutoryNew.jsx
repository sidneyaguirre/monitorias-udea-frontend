import React, { Component } from "react";

import NewTutoryForm from "../../components/Tutory/NewTutoryForm";
import tutorNewImg from "../../assets/voice_interface.svg";

class TutoryNew extends Component {
  state = {
    form: {
      courseName: "",
      classroom: "",
      documentType: "",
      documentNumber: "",
      email: "",
      courseId: ""
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
  };

  render() {
    return (
      <div className="container">
        <div className="row p-4 pt-5 h-100">
          <div className="col-sm align-self-center text-center">
            <img className="w-50" src={tutorNewImg} alt="new tutor" />
          </div>
          <div className="col-sm">
            <NewTutoryForm
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

export default TutoryNew;
