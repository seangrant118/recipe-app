import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import * as actions from "../actions/recipe";

class RecipeView extends React.Component {
  render() {
    return <div>viewing recipe with id of {this.props.match.params.id}</div>;
  }
}

export default withRouter(RecipeView);
