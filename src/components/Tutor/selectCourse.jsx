import React, { Component } from "react";

class SelectCourse extends Component {
  render() {
    return (
      <div>
        <select className="form-control">
          {this.props.subjects.map(course => {
            return (
              <option>
                   {course.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SelectCourse;


