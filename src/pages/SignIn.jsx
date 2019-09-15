import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div className="jumbotron bg-white">
        <div className="row m-4">
          <div className="col p-4 m-4">
            <h1 className="display-4">Estudiante</h1>
            <p className="lead">
              ¿No tienes cuenta? Crea una
              <a className="text-success" href="/student/new">
                {" "}
                aquí.
              </a>
            </p>
            <button className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
          <div className="col p-4 m-4">
            <h1 className="display-4">Monitor</h1>
            <p className="lead">
              ¿No tienes cuenta? Crea una
              <a className="text-success" href="/tutor/new">
                {" "}
                aquí.
              </a>
            </p>
            <button className="btn btn-primary">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
