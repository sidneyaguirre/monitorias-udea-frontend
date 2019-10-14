import React, { Component } from "react";
import Moment from 'moment';
import { MdAccessTime, MdToday } from "react-icons/md";
import 'moment/locale/es';

class ModalEvent extends Component {
    closeModal = childData => {
        this.props.closeModal(null);
    };
    
    render() {
        Moment.locale('es-us');
    return (
      <div>
        <div className="modal-backdrop bg-light fade show modal-backdrop-event"></div>
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content w-75 modal-event text-light bg-secondary border-0 is-box">
              <div className="modal-header pt-4  border-bottom-0">
                <h5 className="modal-title  is-open-sans">
                  ¿Deseas asistir al evento?
                </h5>
                <button
                  onClick={this.closeModal}
                  type="button"
                  className="close text-light"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body pb-4">
                <p className="is-font-weight-500 is-open-sans">{this.props.event.title}</p>
                <p className="">   <MdToday />  &nbsp;
                    {Moment(this.props.event.start).format('dddd, DD, MMMM')} 
                    </p>
                <p className="" >  <MdAccessTime />   &nbsp;
                    {Moment(this.props.event.start).format('hh : mm A')} -&nbsp;
                    {Moment(this.props.event.end).format('hh : mm A')}
                    </p>  
              </div>
              <div className="modal-footer">
                <button className="btn  btn-outline-light "  onClick={this.props.actionClicked}> 
                <img
                          src="https://img.icons8.com/color/48/000000/google-calendar.png"
                          height="25px"
                          alt="cal"
                        ></img> &nbsp; &nbsp;
                        Asistir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalEvent;
