import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/common/Header.scss";
import logo from "../../assets/logo-udea.png";

class Header extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand"  to="/">
            <img
              src={logo}
              height="50"
              className="d-inline-block align-top"
              alt="logo udea"
              to="/"             
            />&nbsp;&nbsp;
            <span className="navbar-text is-font-weight-200 text-primary">
            Monitorías 
            </span>&nbsp;
            <span className="navbar-text is-font-weight-800 text-primary">
             UdeA
            </span>
           
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;