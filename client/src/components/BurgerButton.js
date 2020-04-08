import React from "react";

class BurgerButton extends React.Component {
  state = {
    open: false,
  };

  handleClick() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <div className="burger-container" onClick={() => this.handleClick()}>
        <div className="line line-top" />
        <div className="line line-middle" />
        <div className="line line-bottom" />
      </div>
    );
  }
}

export default BurgerButton;
