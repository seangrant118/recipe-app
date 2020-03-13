import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/Header.css";

class Header extends React.Component {
  state = {
    recipeSearch: true
  };

  flipSearch = () => {
    this.setState(() => ({
      recipeSearch: !this.state.recipeSearch
    }));
  };
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
        </div>
      );
    }
  }

  renderSearchBar() {
    if (this.state.recipeSearch) {
      return (
        <div>
          <input type="text" name="recipe" placeholder="Search for a recipe" />
          <button onClick={this.flipSearch}>Search by ingredient</button>
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="text"
            name="ingredient"
            placeholder="Search by ingredient"
          />
          <button onClick={this.flipSearch}>Search by recipie</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderSearchBar()}
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
