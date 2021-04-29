import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Link to="/">
          {" "}
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="/tours">
          {" "}
          <Menu.Item
            name="tours"
            active={activeItem === "tours"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to="addTour">
          {" "}
          <Menu.Item
            name="Add tour"
            active={activeItem === "Add tour"}
            onClick={this.handleItemClick}
          />
        </Link>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input
              value={this.props.searchByName}
              onChange={(e) => this.props.setSearchByName(e.target.value)}
              icon="search"
              placeholder="Search..."
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
