import React, { Component } from "react";
import SignInForm from "../components/common/SignInForm";

class SignIn extends Component {
  render() {
    return (
      <div className="jumbotron bg-light m-0 min-height-80 p-4">
      <div className="row py-0 mx-3">
        <h1 className="display-4">Bienvenido</h1>
      </div>
        <div className="row m-1">
          <div className="col p-4 m-3 bg-primary text-white ">
            <h1 className="display-5">Estudiante</h1>
            <p className="lead">
              ¿No tienes cuenta? Crea una
              <a className="text-success" href="/student/new">
                {" "}
                aquí.
              </a>
            </p>
            <SignInForm/>
            <button className="btn  btn-outline-light">
              Iniciar sesión
            </button>
          </div>
          <div className="col p-4 m-3 bg-light ">
            <h1 className="display-5">Monitor</h1>
            <p className="lead">
              ¿No tienes cuenta? Crea una
              <a className="text-success" href="/tutor/new">
                {" "}
                aquí.
              </a>
            </p>
            <SignInForm/>

            <button className="btn btn-outline-primary">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
