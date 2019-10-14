import React, { Component } from "react";
import image from "../../assets/reading-girl.svg";
import StudentForm from "../../components/Student/StudentForm";
import Spinner from "../../components/common/Spinner";
import Modal from "../../components/common/Modal";

const initialState = {
  loading: false,
  error : {
    show: false,
    title: "Error",
    message: "Completa todos los datos e intenta nuevamente."
  },
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

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleCloseModal = childData => {
    this.setState({ error: {...this.state.error, show: false}});
  };

  handleSubmit(){ 
    this.setState({ loading: true });
    this.createStudent(this.state.form);
  };

  validateForm = e => {
    console.log(this.state.form);
    e.preventDefault();
    if (
      !this.state.form.documentType
      || !this.state.form.documentNumber
      || !this.state.form.firstName 
      || !this.state.form.lastName
      || !this.state.form.password
      || !this.state.form.confirmPassword
      || !this.state.form.email) {
      this.setState({ 
        error: {...this.state.error, show: true}});
    } else {
      this.handleSubmit();
    }
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
        this.props.history.push("/student/step1");
      });
  };

  render() {
    return (
      <div>
        {this.state.error.show ? 
          <Modal error={this.state.error} closeModal={this.handleCloseModal} />
         : 
          ""
        }
        {this.state.loading ? <Spinner /> : " "}
        <div className="container">
          <div className="row p-4 pt-5 h-100">
            <div className="col-sm align-self-center text-center">
              <img className="w-50" src={image} alt="new student" />
            </div>
            <div className="col-sm">
              <StudentForm
                onChange={this.handleChange}
                onSubmit={this.validateForm}
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
