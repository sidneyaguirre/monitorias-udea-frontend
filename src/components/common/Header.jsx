import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/common/Header.scss";
import logo from "../../assets/logo-udea.png";

class Header extends Component {
  render() {
    return (
        <div className="container-fluid row justify-content-md-center">
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
    );
  }
}

export default Header;
