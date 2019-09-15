import React, { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="modal-backdrop bg-light fade show"></div>
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
          >
        <div className="text-center w-100 text-center">
            <div className="spinner-grow text-primary " role="status">
        </div>
         
        </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
