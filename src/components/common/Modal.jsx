import React, { Component } from "react";
import { Link } from "react-router-dom";

class Modal extends Component {

    closeModal = (childData) => {
        console.log('close');
        this.props.closeModal(null);
    }

    render() {
        return (
            <div>
            <div className="modal-backdrop fade show" ></div>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content rounded-0">
                        <div className="modal-header  rounded-0 ">
                            <h5 className="modal-title is-open-sans">{this.props.error.title}</h5>
                            <button 
                            onClick={this.closeModal}
                            type="button" 
                            className="close" 
                            >
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>{this.props.error.message}</p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            </div>
            
        );
    }
}

export default Modal;
