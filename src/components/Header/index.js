import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBolt,
  faSearch,
  faPlusSquare
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <nav
        className="navbar"
        aria-label="main navigation"
        style={{
          borderBottom: "solid 1px #dddddd"
        }}
      >
        <div className="navbar-brand">
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <Link to={"/"} className="navbar-item">
              <span className="icon has-text-success is-medium">
                <FontAwesomeIcon icon={faHome} size="sm" />
              </span>
              Home
            </Link>

            <NavLink activeClassName="active" to="/add" className="navbar-item">
              <span className="icon has-text-info is-medium">
                <FontAwesomeIcon icon={faPlusSquare} size="sm" />
              </span>
              Add
            </NavLink>
            <Link to={"/stats"} className="navbar-item">
              <span className="icon has-text-info is-medium">
                <FontAwesomeIcon icon={faBolt} size="sm" />
              </span>
              Statistics
            </Link>
            <Link to={"/search"} className="navbar-item">
              <span className="icon has-text-info is-medium">
                <FontAwesomeIcon icon={faSearch} size="sm" />
              </span>
              Search
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
