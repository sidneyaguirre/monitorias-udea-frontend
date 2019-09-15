import React, { Component } from "react";

class CourseCard extends Component {
    render() {
        return (
            <div className="card rounded-lg  is-box">
                <div className="card-body">                  
                    <h5 className="card-title is-open-sans">{this.props.course.nameMateria}</h5>
                    <div className="is-font-small text-primary ">
                        <span className="is-font-weight-600 is-open-sans"> Monitor: </span>
                        {this.props.course.nameInstructor}
                    </div>
                    <div className="is-font-small text-black-50">                        
                    {this.props.course.description}
                    </div>
                    <div className="is-font-small">                        
                    Semestre: {this.props.course.semester}
                    </div>
                   
                    
                    <button className="btn btn-primary rounded-lg btn-sm float-right"> Suscribirse</button>
                </div>
            </div>

        );
    }
}
export default CourseCard;
