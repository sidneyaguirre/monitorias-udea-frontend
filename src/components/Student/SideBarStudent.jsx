import React, { Component } from "react";
import { MdHome, MdSearch } from "react-icons/md";

class SideBarStudent extends Component {
state = {
  user: {
    image: {
      url: "https://www.w3schools.com/w3images/avatar2.png"
    }
  }
}

componentDidMount(){
  this.getImage();
}

  getImage(){
    const user = JSON.parse(localStorage.getItem("user"));
    if (!!user) {
      console.log(user);
      this.setState({ user });
      
    } else {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div
        className="position-fixed sidebar list-group list-group-flush"
        role="tablist"
      >
        <a
          className="list-group-item list-group-item-action px-2"
          role="tab"
          href="/student/home"
          title={this.state.user.displayName}
        >
          <img
            src={this.state.user.image.url}
            alt="Avatar"
            className="avatar"
          />
        </a>
        <a
          className="list-group-item list-group-item-action"
          role="tab"
          href="/"
          title="Inicio"
        >
          <MdHome />
        </a>
        <a
          className="list-group-item list-group-item-action"
          role="tab"
          href="/student/subscribe-course"
          title="Subscripciones"
        >
          <MdSearch />
        </a>
        {/* <a
          className="list-group-item list-group-item-action"
          role="tab"
          href="/"
        >
          <MdSettings />
        </a> */}
      </div>
    );
  }
}

export default SideBarStudent;
