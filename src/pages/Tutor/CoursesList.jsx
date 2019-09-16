import React, { Component } from "react";

import TutorCourseCard from "../../components/Tutor/TutorCourseCard";

class CoursesList extends Component {
  state = {
    courses: []
  };

  componentDidMount() {
    var url = `https://monitorias-backend.herokuapp.com/api/v1/byInstructor?idInstructor=65465`;
    var tutories = [];
    fetch(url)
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(info => {
        Promise.all(info.data.map(element =>
            tutories.push({
              subjectName: element.name,
              description: element.description,
              place: element.place,
              semester: element.semester,
              date: element.date,
              timeInit: element.timeInit,
              timeEnd: element.timeEnd
            })
          )
        ).then(() => {
          this.setState({
            courses: [].concat(this.state.courses, tutories)
          });
          console.log(this.state);
        });
      });
  };

  render() {
    return (
      <div>
        <TutorCourseCard data={this.state.courses} />
      </div>
    );
  }
}

export default CoursesList;
