import React, { Component } from "react";

import TutorForm from "../components/TutorForm";

class TutorNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      subject: ""
    }
  };

  /* manage a change in the page to set the new state */
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

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <TutorForm
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

export default TutorNew;
