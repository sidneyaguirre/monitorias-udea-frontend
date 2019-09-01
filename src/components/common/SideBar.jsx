import React, { Component } from "react";
import { MdHome, MdApps, MdSettings } from "react-icons/md";

class SideBar extends Component {
    render() {
        return (
            <div className="position-fixed sidebar list-group list-group-flush" role="tablist">
                <a className="list-group-item list-group-item-action" role="tab"> 
                   <MdHome/>
                </a>
                <a className="list-group-item list-group-item-action" role="tab">
                    <MdApps/>
                </a>
                <a className="list-group-item list-group-item-action" role="tab">
                <MdSettings/>
                </a>                
            </div>
        
        );
    }
}

export default SideBar;
