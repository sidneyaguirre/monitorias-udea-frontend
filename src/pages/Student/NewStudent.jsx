import React, { Component } from "react";

import StudentForm from "../../components/student/StudentForm";

class NewStudent extends Component {
  state = {
    form: {
      name: "",
      lastName: "",
      email: "",
      documentType: "",
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
            <div className="col-sm" />
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
