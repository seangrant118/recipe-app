import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import BurgerButton from "./BurgerButton";
import SearchBar from "./search/SearchBar";
import "./styles/Header.css";

class Header extends React.Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div className="menu-items">
          <Link className="nav-link" to="/signout">
            Sign Out
          </Link>
          <Link className="nav-link" to="/createrecipe">
            Create Recipe
          </Link>
          <BurgerButton>
            <Link className="burger-item" to="/home">
              Home
            </Link>
            <Link className="burger-item" to="/signout">
              Sign Out
            </Link>
            <Link className="burger-item" to="/createrecipe">
              Create Recipe
            </Link>
          </BurgerButton>
        </div>
      );
    } else {
      return (
        <div className="menu-items">
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
          <Link className="nav-link" to="/signin">
            Signin
          </Link>
          <BurgerButton>
            <Link className="burger-item" to="/home">
              Home
            </Link>
            <Link className="burger-item" to="/signup">
              Signup
            </Link>
            <Link className="burger-item" to="/signin">
              Signin
            </Link>
          </BurgerButton>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="header">
        <Link className="nav-link logo" to="/home">
          Ma's Cookbook
        </Link>
        <SearchBar />
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(Header);
