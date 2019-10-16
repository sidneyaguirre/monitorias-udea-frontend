import React, { Component } from "react";

import SideBarStudent from "../../components/Student/SideBarStudent";
import NewTutoryForm from "../../components/Tutory/NewTutoryForm";
import tutorNewImg from "../../assets/voice_interface.svg";

// const initialState = {
//   idInstructor: "",
//       nameInstructor: "",
//       name: "",
//       description: "",
//       place: "",
//       year: "",
//       semester: "",
//       date: "",
//       timeInit: "",
//       timeEnd: ""
// }

class TutoryNew extends Component {
  state = {
    form: {
      idInstructor: "",
      nameInstructor: "",
      name: "",
      description: "",
      place: "",
      year: "",
      semester: "",
      date: "",
      timeInit: "",
      timeEnd: ""
    },
    courses: []
  };

  handleChange = e => {
    this.setState({
      form: {
        /* we get the previous values in the form*/
        ...this.state.form,
        /* and add a new one */
        [e.target.name]: e.target.value
      }
    });
  };

  createAsesory = async info => {
    var url = "https://monitorias-backend.herokuapp.com/api/v1/createAsesoria";
    var auxInfo = info.name;
    var subject = auxInfo.split(" ");
    var data = {
      idInstructor: info.idInstructor,
      nameInstructor: info.nameInstructor,
      idMateria: subject.pop(),
      name: subject.toString(),
      description: info.description,
      place: info.place,
      semester: info.year + "-" + info.semester,
      date: info.date,
      timeInit: info.timeInit,
      timeEnd: info.timeEnd
    };
    console.log(data);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => {
        console.log("Success:", response);
        window.alert("Resultado: Enviado!");
      })/* .then(() => window.location.reload()) */
  };

  componentDidMount() {
    var url =
      "https://monitorias-backend.herokuapp.com/api/v1/cursos/getAllCursos";
    var subjects = [];
    fetch(url)
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(info => {
        Promise.all(
          info.data.map(element =>
            subjects.push({
              _id: element._id,
              name: element.name
            })
          )
        ).then(() => {
          this.setState({
            courses: [].concat(this.state.courses, subjects)
          });
          // console.log(this.state);
        });
      });
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log("Form submitted");
    this.createAsesory(this.state.form);
  };

  render() {
    return (
      <div className="container">
        <div className="col-1">
            <SideBarStudent></SideBarStudent>
          </div>
        <div className="row p-4 pt-5 h-100">
          <div className="col-sm align-self-center text-center">
            <img className="w-50" src={tutorNewImg} alt="new tutor" />
          </div>
          <div className="col-sm">
            <NewTutoryForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state}
              className="col"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TutoryNew;
