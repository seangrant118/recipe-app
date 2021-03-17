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
              {this.props.children.map((Child, i) => {
                // console.log(Child.props);
                return (
                  <Link
                    className={Child.props.className}
                    to={Child.props.to}
                    key={i}
                    onClick={() => this.handleClick()}
                  >
                    {Child.props.children}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BurgerButton;
