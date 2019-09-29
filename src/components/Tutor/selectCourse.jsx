import React, { Component } from "react";

class SelectCourse extends Component {
  handleChange = e => {
    let selectedValue = e.target.options[e.target.selectedIndex].value;
    console.log(selectedValue);
  };

  render() {
    return (
      <div>
        <select name="subjectId" onChange={this.props.onChange} className="form-control">
          {this.props.subjects.map(course => {
            return (
              <option value={course._id} key={course._id}>
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
