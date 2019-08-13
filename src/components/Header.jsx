import React, { Component } from "react";
import logo from "../assets/logo-udea.png";
import { Link } from "react-router-dom";

import "../styles/Header.scss";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="logo udea" />
            </Link>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="Navbar__brand" to="/">
                  <span className="font-weight-light">Monitorías </span>
                  <span className="font-weight-bold">UdeA</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
