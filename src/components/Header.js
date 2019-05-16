import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class Header extends React.Component {
  state = { activeItem: "editorials" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderMenuList() {
    return this.props.items.map(item => {
      return (
        <Menu.Item
          name={item.name}
          active={this.state.activeItem === item.name}
          onClick={this.handleItemClick}
        />
      );
    });
  }

  render() {
    const { activeItem } = this.state;

    return <Menu>{this.renderMenuList()}</Menu>;
  }
}
