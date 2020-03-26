import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import "../styles/auth/credentials.css";
import { FaLock, FaUserAlt } from "react-icons/fa";

class Signin extends React.Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="credentials-container">
        <div className="instructions">
          <h2>Sign in with username.</h2>
          <p>For existing users.</p>
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
              placeholder="Password"
            />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button className="btn-submit" onSubmit={handleSubmit(this.onSubmit)}>
            Signin
          </button>
          <div className="redirect-container">
            <a className="btn-redirect" href="/signup">
              Create an account
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
  reduxForm({ form: "signin" })
)(Signin);
