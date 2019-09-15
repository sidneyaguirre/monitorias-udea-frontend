import React, { Component } from 'react';
import CourseCard from '../../components/Course/CourseCard';
import SideBarStudent from "../../components/Student/SideBarStudent";
// import Modal from "../../components/common/Modal";

class SubscribeCourse extends Component {

    constructor() {
        super();
        this.getCourses();
    }

    state = {
        error: {
            title: 'Error', 
            message: 'No se pudo guardar la asistencia, por favor intenta nuevamente.'
        },
        cursos: [{            
            nameInstructor: "Fabian Rojas",
            nameMateria: "Mecánica de fluidos",
            description: "With supporting text below as a natural lead-in to additional content.",
            semester: "2019-1",
        },
        {            
            nameInstructor: "Carlos Andrés García",
            nameMateria: "Cálculo Integral",
            description: "With supporting text below as a natural lead-in to additional content.",
            semester: "2019-1",
        }]
    };


    getCourses   = async info => {
        const api = "https://monitorias-backend.herokuapp.com/api/v1/cursos/getAllCursos";
        fetch(api, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            res.json();
            console.log(res);
          })
          .catch(error => {
            console.error("Error:", error);
            this.setState({loading: false});
          })
          .then(response => {
            this.setState({loading: false});
            console.log(response);
          });
      };
    
    // curso: materiaXInstructor:
    //  { id, idMateria, semester, idInstructor, description, asesoria[{ idAsesoria } ],
    //   asesoriaPrivada[{ idAsesoria } ] subscriptors[ { id, name, email } ] }

    render() {
        return (

            <div >
                {/* { this.state.error ? <Modal error={this.state.error} closeModal={this.handleCloseModal} /> : '' } */}
                <div className="row p-0 ">
                    <div className="col-1 ">
                        <SideBarStudent></SideBarStudent>
                    </div>

                    <div className="col-11 px-5">
                        <div className="row pl-1 ">
                            <div className="col">
                                <h4 className="h4 text-primary">Cursos</h4>
                                <p className="lead is-font-small">Encuentra todos las
                                    cursos a los cursos que puedes suscribirte.</p>
                            </div>
                        </div>

                        <div className="row py-0 pl-0">
                            {
                                this.state.cursos.map((curso, i) => (
                                    <div key={i} className="col col-sm-3 py-3">
                                        <CourseCard course={curso} />
                                    </div>)
                                )
                            }

                        </div>

                    </div>
                </div>

            </div>




        );
    }
}

export default SubscribeCourse;