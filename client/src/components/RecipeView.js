import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

const RecipeView = props => {
  return <div>viewing recipe with the id of {props.match.params.id}</div>;
};

export default withRouter(RecipeView);
