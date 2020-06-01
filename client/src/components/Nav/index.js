import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    open: false,
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  setActiveNavItem = (path) => {
    return window.location.pathname === path ? "nav-link active" : "nav-link";
  };
  render() {
    return (
      <div className="jumbotron">
        <h1>Books</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              onClick={this.toggleNav}
              className={this.setActiveNavItem("/")}
              to="/"
            >
              Seach
            </Link>
          </li>

          <li className="nav-item">
            <Link
              onClick={this.toggleNav}
              className={this.setActiveNavItem("/favorites")}
              to="/favorites"
            >
              See favorites
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
