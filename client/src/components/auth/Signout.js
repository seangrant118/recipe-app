import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout();
  }
  render() {
    return <div>sorry to see you go!</div>;
  }
}

export default connect(null, actions)(Signout);
