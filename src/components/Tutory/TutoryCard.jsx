import React, { Component } from "react";

import "../../styles/Tutory/TutoryCard.scss";

class Tutory extends Component {
  render() {
    return (
      <div className="tutory">
        <div className="tutory__header">
          <h3>{this.props.details.subject}</h3>
        </div>
        {/* <div className="tutory__section-name">
                <p>{this.props.details.subject}</p>
            </div> */}

        <div className="tutory__section-info">
          <h4 className="card-title">Monitor:</h4>
          <h5 className="card-text">
            {this.props.details.tutorFirstName}{" "}
            {this.props.details.tutorLastName}
          </h5>
          <a className="card-text" href={"mailto:" + this.props.details.email}>
            {this.props.details.email}
          </a>
        </div>

        <div className="tutory__footer">
          <h4 className="card-title">Aula:</h4>
          <p className="card-text">{this.props.details.place}</p>
        </div>
      </div>
    );
  }
}

export default Tutory;
