import React, { Component } from "react";
import StudentForm from "../../components/Student/StudentForm";

class NewStudent extends Component {
  state = {
    form: {
      name: "",
      lastName: "",
      number: "",
      email: "",
      documentType: "DEFAULT",
      documentNumber: ""
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <img 
              src='https://www.freepik.com/free-vector/flat-university-background_4482547.html' alt="" width="90%"/>
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
