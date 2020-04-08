import React from "react";
import { Link } from "react-router-dom";

class BurgerButton extends React.Component {
  state = {
    open: false,
  };

  handleClick() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div>
        <div className="burger-container" onClick={() => this.handleClick()}>
          <div className="line line-top" />
          <div className="line line-middle" />
          <div className="line line-bottom" />
        </div>
        {this.state.open && (
          <div className="menu-container">
            <div className="exit-container" onClick={() => this.handleClick()}>
              <div className="exit exit-top" />
              <div className="exit exit-middle" />
              <div className="exit exit-bottom" />
            </div>
            <div className="menu-list">
              <Link
                className="burger-item"
                to="/home"
                onClick={() => this.handleClick()}
              >
                Home
              </Link>
              <Link
                className="burger-item"
                to="/signout"
                onClick={() => this.handleClick()}
              >
                Sign Out
              </Link>
              <Link
                className="burger-item"
                to="/createrecipe"
                onClick={() => this.handleClick()}
              >
                Create Recipe
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BurgerButton;
