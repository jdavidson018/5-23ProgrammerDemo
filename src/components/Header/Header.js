import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  state = { activeItem: "editorials" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <Link to="/" className="header item">
            <i className="fas fa-paw fa-2x" />
          </Link>
          <Link to="/dogs/new" className="item">
            Dogs
          </Link>
        </div>
      </div>
    );
  }
}
