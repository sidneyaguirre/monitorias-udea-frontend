import React, { Component } from "react";
import { MdAccessTime, MdToday, MdPlace } from "react-icons/md";

import "../../styles/Tutor/Tutor.scss";

class TutorCourseCard extends Component {
  render() {
    return (
      <ul className="tutors-tutory-list">
        {this.props.data.map(tutory => {
          return (
            <li key={tutory.subjectName}>
              <div className="card rounded-lg  is-box">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    {tutory.subjectName}
                  </h5>
                  <div className="is-font-small">{tutory.description}</div>
                  <div className="is-font-small">
                    <MdAccessTime />
                    {tutory.timeInit} - {tutory.timeEnd}
                  </div>
                  <div className="is-font-small">
                    <MdToday /> {tutory.date}
                  </div>
                  <div className="is-font-small">
                    <MdPlace /> {tutory.place}
                  </div>

                  <button className="btn btn-primary btn-sm float-right">
                    Suscritos
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TutorCourseCard;
