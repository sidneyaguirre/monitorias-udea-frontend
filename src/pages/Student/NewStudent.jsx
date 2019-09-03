import React, { Component } from "react";
import image from "../../assets/reading-girl.svg"
import StudentForm from "../../components/Student/StudentForm";

const initialState = {
  form: {
    documentType: "",
    documentNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:""
    }
};

class NewStudent extends Component {
  state = initialState;

  // Reducer(?)
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(this.state.form);
    
    this.createCourse(this.state.form)
    .then(() => {this.setState(initialState)}
    );    
  };

  createCourse = async info => {
    const api =  "https://monitorias-backend.herokuapp.com/api/v1/users/createStudent";
    var data = {      
        documentType: info.documentType,
        documentNumber: info.documentNumber,
        firstName: info.firstName,
        lastName: info.lastName,
        email: info.email,
        password: info.password,
        confirmPassword: info.password
    };
    fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
        "Content-Type": "application/json"
        }
    })
        .then(res => {res.json();
        console.log(res);
        })
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response));
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
                onSubmit={this.handleSubmit}
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
