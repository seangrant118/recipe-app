import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as actions from "../actions/recipe";

class RecipeView extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getRecipe(id);
  }
  render() {
    return <div>viewing recipe with id of {this.props.match.params.id}</div>;
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipe.recipe };
}

export default connect(mapStateToProps, actions)(withRouter(RecipeView));
