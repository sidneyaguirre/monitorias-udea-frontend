import React, { Component } from "react";

class SelectCourse extends Component {
  render() {
    return (
      <div>
        <select>
          {this.props.courses.map(course => {
            return (
              <option>
                   {course._id} - {course.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SelectCourse;


