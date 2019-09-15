import React, { Component } from "react";

import CourseCard from "../../components/Tutor/CourseCard";

import "../../styles/Tutor/Tutor.scss";

class CourseList extends Component {
  render() {
    return (
      <div>
        <p>Course List</p>
        <CourseCard />
      </div>
    );
  };
};

export default CourseList;
