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
            Dogs forever!
          </Link>
          <Link to="/about" className="item">
            About
          </Link>
          <div className="ui simple dropdown item">
            Dropdown <i className="dropdown icon" />
            <div className="menu">
              <Link to="/dogs/new" className="item">
                Add a Dog
              </Link>
              <Link to="/dogs/delete/:id" className="item">
                Remove a Dog
              </Link>
              <Link to="/dogs/:id" className="item">
                Fetch a Dog
              </Link>
              <Link to="/dogs/edit/:id" className="item">
                Update a Dog
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
