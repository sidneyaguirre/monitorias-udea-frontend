import React, { Component } from "react";
import logo from "../assets/logo-udea.png";
import { Link } from "react-router-dom";

import "../styles/Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo udea" />
            </Link>
                <div className="Navbar__title">
                  <span className="font-weight-light">Monitorías </span>
                  <span className="font-weight-bold">UdeA</span>
                </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
