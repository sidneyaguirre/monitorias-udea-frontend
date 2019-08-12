import React, { Component } from "react";
import logo from "../assets/logo-udea.png";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header__logo">
            <img src={logo} alt="logo udea" />
          </div>
          <div>
            <ul>
              <li>Iniciar Sesión</li>
              <li></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
