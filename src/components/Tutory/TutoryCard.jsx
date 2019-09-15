import React, { Component } from 'react'

import '../../styles/Tutory/Tutory.scss'

class TutoryCard extends Component{
    render(){
        return(
        <div className="tutory">
            <div className="tutory__header">
                <h3>Monitoría</h3>
            </div>

            <div className="tutory__section-name">
                <h1>{this.props.subject}</h1>
            </div>

            <div className="tutory__section-info">
            <h5>Monitor:</h5>
                <h4>{this.props.tutorFirstName} {this.props.tutorLastName}</h4>
            </div>
            <div className="tutory__section-name">
                <p>{this.props.email}</p>
            </div>
            
            <div className="tutory__footer">
                <p>Bienestar Universitario UdeA</p>
            </div>
        </div>
        )
    }
}

export default TutoryCard;