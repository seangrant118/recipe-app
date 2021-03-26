import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import "../styles/auth/signout.css";

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return (
      <div>
        <div className="sorry">sorry to see you go!</div>
        <button onClick={this.props.history.push("/home")}>Home</button>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);
