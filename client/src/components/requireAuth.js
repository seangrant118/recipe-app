import React from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends React.Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { auth: state.auth.authenticated, user: state.auth.user };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
