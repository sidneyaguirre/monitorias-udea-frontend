import React, { Component } from 'react';
import axios from 'axios'
import CourseCard from '../../components/Course/CourseCard';
import SideBarStudent from "../../components/Student/SideBarStudent";
// import Modal from "../../components/common/Modal";
const initialState = {
    error: {
        title: 'Error', 
        message: 'No se pudo guardar la asistencia, por favor intenta nuevamente.'
    },
    loading: false,
    cursos: [{            
        nameInstructor: "Fabian Rojas",
        nameMateria: "Mecánica de fluidos",
        description: "With supporting text below as a natural lead-in to additional content.",
        semester: "2019-1",
    }]
};
class SubscribeCourse extends Component {
    
    state = initialState;
    constructor() {
        super();
        this.getCourses();
    }

    getCourses(){
        const api = "https://monitorias-backend.herokuapp.com/api/v1/cursos/getAllCursos";
        axios.get(api)
        .then( (response) => {
            console.log(response.data.data);
            this.setState({cursos: response.data.data});
        })
        .catch( (error) =>  {
            this.setState({error: true});
        })
        .finally( () => {
            this.setState({loading: false});
        });
    }

    subscribeCourse(body){
        const api = "https://monitorias-backend.herokuapp.com/api/v1/cursos/subscribeToCurso";
   
        axios.post(api, body)
        .then( (response) => {
            console.log(response.data.data);
            this.setState({cursos: response.data.data});
        })
        .catch( (error) =>  {
            this.setState({error: true});
        })
        .finally( () => {
            this.setState({loading: false});
        });
    }
    
    onSubscribe(id) {
        const body = {
            id: id,
            idStudent: '',
            name: '',
            email: ''
        }
        console.log(id);
        this.subscribeCourse(body);
    }
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
                                <p className="lead is-font-small">Encuentra todos 
                                   los cursos a los que puedes suscribirte.</p>
                            </div>
                        </div>

                        <div className="row py-0 pl-0">
                            {
                                this.state.cursos.map((curso, i) => (
                                    <div key={i} className="col col-sm-3 py-3">
                                        <CourseCard 
                                        id={curso._id} 
                                        course={curso}
                                        onSubscribe={this.onSubscribe}
                                         />
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