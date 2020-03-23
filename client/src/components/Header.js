import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SearchBar from "./search/SearchBar";
import "./styles/Header.css";

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link className="nav-link" to="/signout">
            Sign Out
          </Link>
          <Link className="nav-link" to="/feature">
            Feature
          </Link>
          <Link className="nav-link" to="/createrecipe">
            Create Recipe
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
          <Link className="nav-link" to="/signin">
            Signin
          </Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="header">
        <Link className="nav-link" to="/">
          Redux Auth
        </Link>
        <SearchBar />
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
