import React, { Component } from "react";
import image from "../../assets/reading-girl.svg";
import StudentForm from "../../components/Student/StudentForm";
import Spinner from "../../components/common/Spinner";

const initialState = {
  loading: false,
  form: {
    documentType: "",
    documentNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
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
    this.setState({ loading: true });
    this.createStudent(this.state.form);
    // .then(() => { this.setState(initialState) }
    // );
  };

  createStudent = async info => {
    const api =
      "https://monitorias-backend.herokuapp.com/api/v1/users/createStudent";
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
      .then(res => {
        res.json();
        console.log(res);
      })
      .catch(error => {
        console.error("Error:", error);
        this.setState({ loading: false });
      })
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/student/home");
      });
  };

  render() {
    return (
      <div>
        {this.state.loading ? <Spinner /> : " "}
        <div className="container">
          <div className="row p-4 pt-5 h-100">
            <div className="col-sm align-self-center text-center">
              <img className="w-50" src={image} alt="new student" />
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
