
import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export class SidebarMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (      
        <Menu pointing secondary vertical
        color='blue'
        inverted={true}
        fixed='left'
        borderless={true}
        >
        <Menu.Item 
        href="/"
        name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
        </Menu.Item>

        <Menu.Item
         href="/students"
          name='estudiantes'
          active={activeItem === 'estudiantes'}
          onClick={this.handleItemClick}
        >
           {/* <Link to="/">Students</Link> */}
        </Menu.Item>
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>        
    );
  }
}
