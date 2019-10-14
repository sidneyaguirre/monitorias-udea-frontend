import React, { Component } from "react";
import { MdWarning } from "react-icons/md";

class Modal extends Component {
  closeModal = childData => {
    this.props.closeModal(null);
  };

  render() {
    return (
      <div>
        <div className="modal-backdrop bg-info fade show"></div>
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content w-75 border-0  bg-light text-primary is-box">
              <div className="modal-header px-4 pt-4 border-bottom-0 ">
                <h5 className="modal-title is-open-sans">
                  <MdWarning/> &nbsp; {this.props.error.title }
                </h5>
                <button
                  onClick={this.closeModal}
                  type="button"
                  className="close text-secondary"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body px-4">
                <p>{this.props.error.message}</p>

                {this.props.error.buttonText ? <button
                  onClick={this.props.actionClicked}
                  className="btn  btn-outline-light"
                > {this.props.error.buttonText  }</button> : '' }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
