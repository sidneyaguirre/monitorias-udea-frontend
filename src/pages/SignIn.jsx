import React, { Component } from "react";
// import SignInForm from "../components/common/SignInForm";
import { GoogleAuthorize } from "react-google-authorize";
import { initProfile } from "../CalendarApi";
import Modal from "../components/common/Modal";

class SignIn extends Component {
  state = {
    error: {
      show: false,
      title: "Error",
      message: "Ha ocurrido un error, intenta nuevamente."
    }
  };

  failResponseGoogle = response => {
    console.log(response);
    this.setState({ error: { ...this.state.error, show: true } });
  };

  sucessResponseGoogle = response => {
    console.log(response);
    localStorage.setItem("token", JSON.stringify(response.access_token));
    initProfile(response.access_token);
  };

  handleCloseModal = childData => {
    this.setState({ error: { ...this.state.error, show: false } });
  };


  render() {
    return (
      <div className="jumbotron bg-white m-0 min-height-80 p-4">
        {this.state.error.show ? (
          <Modal error={this.state.error} closeModal={this.handleCloseModal} />
        ) : (
          ""
        )}
        <div className="row m-1 justify-content-md-center">
          <GoogleAuthorize
            clientId="754018758774-sds3anaedk5u7msh5m22rm6ujtsl07nn.apps.googleusercontent.com"
            buttonText="Authorize"
            scope="openid https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.settings.readonly"
            onSuccess={this.sucessResponseGoogle}
            onFailure={this.failResponseGoogle}
            render={renderProps => {
              return (
                <button
                  className="btn btn-light btn-md"
                  type="button"
                  onClick={renderProps.onClick}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    height="29px"
                    alt="cal"
                  ></img>
                  &nbsp; Inicia sesión
                </button>
              );
            }}
          />
          {/* <div className="col-md-5 p-4 m-3 bg-primary text-white ">
            <h1 className="display-5">Inicia sesión</h1>
            <p className="lead">
              ¿No tienes cuenta? Crea una&nbsp;
              <a className="text-success" href="/student/new">
                aquí&nbsp; 
              </a>si eres estudiante o &nbsp;
              <a className="text-success" href="/tutor/new">
               aquí&nbsp; </a>si eres monitor.
            </p>
            <SignInForm/>
            <button className="btn  btn-outline-light">
              Iniciar sesión
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default SignIn;