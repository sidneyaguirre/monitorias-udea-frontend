import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../styles/common/Header.scss";
import logohz from "../../assets/logohzbig.png";

class Header extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand"  to="/">
            <img
              src={logohz}
              height="120"
              className="d-inline-block align-top"
              alt="logo udea"
              to="/"             
            />&nbsp;&nbsp;

           
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;