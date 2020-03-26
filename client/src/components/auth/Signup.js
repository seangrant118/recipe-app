import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import { FaLock, FaUserAlt } from "react-icons/fa";

class Signup extends React.Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="credentials-container">
        <div className="instructions">
          <h2>Create a username and password</h2>
        </div>
        <form
          className="credentials-form"
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <fieldset>
            <div className="icon-container">
              <FaUserAlt className="input-icon" />
            </div>
            <Field
              className="input-field"
              name="email"
              type="text"
              component="input"
              autoComplete="off"
              placeholder="Username"
            />
          </fieldset>
          <fieldset>
            <div className="icon-container">
              <FaLock className="input-icon" />
            </div>
            <Field
              className="input-field"
              name="password"
              type="password"
              component="input"
              autoComplete="off"
              placeholder="Password"
            />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button className="btn-submit">Signup</button>
          <div className="redirect-container">
            <a className="btn-redirect" href="/signin">
              Have an account? Sign in.
            </a>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
