import React, { Component } from "react";

class Modal extends Component {
  closeModal = childData => {
    this.props.closeModal(null);
  };

  render() {
    return (
      <div>
        <div className="modal-backdrop bg-light fade show"></div>
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content text-light bg-primary  is-box">
              <div className="modal-header border-bottom-0 rounded-0 ">
                <h5 className="modal-title is-open-sans">
                  {this.props.error.title }
                </h5>
                <button
                  onClick={this.closeModal}
                  type="button"
                  className="close text-light"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
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
