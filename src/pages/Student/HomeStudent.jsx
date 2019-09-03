import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Card from "../../components/common/AsesoryCard";
import Modal from "../../components/common/Modal";

class HomeStudent extends Component {
    state = {
        error: {
            title: 'Error', 
            message: 'No se pudo guardar la asistencia, por favor intenta nuevamente.'
        },
        asesorias: [{
            name: "Mecánica de fluidos",
            description: "With supporting text below as a natural lead-in to additional content.",
            nameInstructor: "Fabian Rojas",
            nameMateria: "Mecánica de fluidos",
            place: "Aula 21-201",
            date: "dd-MM-AAAA",
            timeInit: "12:30",
            timeEnd: "14:30",
        },
        {
            name: "Ética profesional",
            description: "With supporting text below as a natural lead-in to additional content.",
            nameInstructor: "Jesús Ocampo ",
            nameMateria: "Ética profesional",
            place: "Aula 10-233",
            date: "dd-MM-AAAA",
            timeInit: "8:00",
            timeEnd: "10:00",
        },
        {
            name: "Ética profesional",
            description: "With supporting text below as a natural lead-in to additional content.",
            nameInstructor: "Jesús Ocampo ",
            nameMateria: "Ética profesional",
            place: "Aula 10-233",
            date: "dd-MM-AAAA",
            timeInit: "8:00",
            timeEnd: "10:00",
        },
        {
            name: "Ética profesional",
            description: "With supporting text below as a natural lead-in to additional content.",
            nameInstructor: "Jesús Ocampo ",
            nameMateria: "Ética profesional",
            place: "Aula 10-233",
            date: "dd-MM-AAAA",
            timeInit: "8:00",
            timeEnd: "10:00",
        },
        {
            name: "Ética profesional",
            description: "With supporting text below as a natural lead-in to additional content.",
            nameInstructor: "Jesús Ocampo ",
            nameMateria: "Ética profesional",
            place: "Aula 10-233",
            date: "dd-MM-AAAA",
            timeInit: "8:00",
            timeEnd: "10:00",
        }

    ]
    };

    handleCloseModal = (childData) => {
        console.log('close');
        this.setState({error: null})
    }

    render() {
        return (
            <div >
                { this.state.error ? <Modal error={this.state.error} closeModal={this.handleCloseModal} /> : '' }
                <div className="row p-0">
                    <div className="col-1">
                        <SideBar></SideBar>
                    </div>

                    <div className="col-11 px-5">
                        <div className="row pl-1 ">
                            <div className="col">
                                <h4 className="h4 text-primary">Cursos que sigues</h4>
                                <p className="lead is-font-small">Encuentra todas las 
                                    asesorías a los cursos que sigues.</p>
                            </div>
                        </div>

                        <div className="row py-0 pl-0">
                            {
                                this.state.asesorias.map( (asesoria, i) => (
                                    <div key={i} className="col col-sm-3 py-3">
                                        <Card data={asesoria}/>
                                    </div> )                                
                                )
                            }
                           
                            
                        </div>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default HomeStudent;
