import React, { Component } from "react";
import image from "../../assets/reading-girl.svg"
import StudentForm from "../../components/Student/StudentForm";

class NewStudent extends Component {
  state = {
    form: {
      name: "",
      lastName: "",
      number: "",
      email: "",
      documentType: "",
      documentNumber: "",
      password: "",
      confirmPassword:""
    }
  };

  // Reducer(?)
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row p-4 pt-5 h-100">
            <div className="col-sm align-self-center text-center">
              <img className="w-50"
              src={image} alt="" />
              </div>
            <div className="col-sm">
              <StudentForm 
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewStudent;
