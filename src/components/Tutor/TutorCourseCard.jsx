import React, { Component } from "react";
import { MdAccessTime, MdToday, MdPlace } from "react-icons/md";

import "../../styles/Tutory/Tutory.scss";

class TutorCourseCard extends Component {
  render() {
    return (
      <div className="card rounded-lg  is-box">
        <div className="card-body">
          <h5 className="card-title text-primary">{this.props.data.nameMateria}</h5>
          <div className="is-font-small">{this.props.data.description}</div>
          <div className="is-font-small">
          Tiempo de inicio
            <MdAccessTime /> 
            {this.props.data.timeInit} -{" "}
            {this.props.data.timeEnd}
          </div>
          <div className="is-font-small">
            <MdToday /> {this.props.data.date} Tiempo de inicio
          </div>
          <div className="is-font-small">
            <MdPlace /> {this.props.data.place} Tiempo de inicio
          </div>

          <button className="btn btn-primary btn-sm float-right">
            Suscritos
          </button>
        </div>
      </div>
    );
  }
}

export default TutorCourseCard;
