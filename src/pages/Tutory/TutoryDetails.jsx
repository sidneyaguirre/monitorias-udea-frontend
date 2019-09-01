import React, { Component } from "react";

import "../../styles/Tutory/Tutory.scss";
import Tutory from "../../components/Tutory/TutoryCard";

/* it Will show the details of a tutory */

class TutoryDetails extends Component {
  state = {
    form: {
      subject: "Álgebra Lineal",
      tutorFirstName: "Pepito",
      tutorLastName: "Pérez",
      email: "pepito.perez@udea.edu.co"
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Tutory
              subject={this.state.form.subject}
              tutorFirstName={this.state.form.tutorFirstName}
              tutorLastName={this.state.form.tutorLastName}
              email={this.state.form.email}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TutoryDetails;
