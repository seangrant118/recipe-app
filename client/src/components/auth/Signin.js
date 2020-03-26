import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import "../styles/auth/credentials.css";

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
            <Field
              className="input-field"
              name="email"
              type="text"
              component="input"
              placeholder="username"
            />
          </fieldset>
          <fieldset>
            <Field
              className="input-field"
              name="password"
              type="password"
              component="input"
              placeholder="password"
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
