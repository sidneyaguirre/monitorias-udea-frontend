import React, { Component } from "react";

class SelectCourse extends Component {
  handleChange = e => {
    let selectedValue = e.target.options[e.target.selectedIndex].value;
    console.log(selectedValue);
  };

  render() {
    return (
      <div>
        <select name="name" onChange={this.props.onChange} className="form-control">
        <option value="" key="0">Seleccione...</option>
          {this.props.subjects.map(course => {
            return (
              <option value={course.name + " " + course._id} key={course._id}>
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
