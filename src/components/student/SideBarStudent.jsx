import React, { Component } from "react";
import { MdHome, MdSearch, MdSettings } from "react-icons/md";

class SideBarStudent extends Component {
    render() {
        return (
            <div className="position-fixed sidebar list-group list-group-flush" role="tablist">
                <a className="list-group-item list-group-item-action px-2" role="tab" href="/student/home"> 
                <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="avatar"/>
                </a>
                <a className="list-group-item list-group-item-action" role="tab" href="/student/home"> 
                   <MdHome/>
                </a>
                <a className="list-group-item list-group-item-action" role="tab" href="/student/subscribe-course">
                    <MdSearch/>
                </a>
                <a className="list-group-item list-group-item-action" role="tab" href="/">
                <MdSettings/>
                </a>                
            </div>
        
        );
    }
}

export default SideBarStudent;
