import React, { Component } from "react";

import "../../styles/Tutor/Tutor.scss";

class CourseCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://fontawesome.com" className="card-link">
            fontawesome
          </a>
        </div>
      </div>
    );
  }
}

export default CourseCard;
