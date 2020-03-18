import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as actions from "../actions/recipe";

class RecipeView extends React.Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getRecipe(id, () => {
      this.setState({
        loaded: true
      });
    });
  }
  render() {
    const recipe = this.props.recipe;
    if (this.state.loaded) {
      return <div>Title: {recipe.title}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipe.recipe };
}

export default connect(mapStateToProps, actions)(withRouter(RecipeView));
