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
      email: "pepito.perez@udea.edu.co",
      place: "20-206"
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Tutory
              details={this.state.form}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TutoryDetails;
