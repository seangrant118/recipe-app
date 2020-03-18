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
      return (
        <div>
          <div>Title: {recipe.title}</div>
          <div>Description: {recipe.description}</div>
          <div>
            Cook Time: {recipe.cookTime} {recipe.cookTimeUnit}
          </div>
          <div>
            Prep Time: {recipe.prepTime} {recipe.prepTimeUnit}
          </div>
          <div>Servings: {recipe.servings}</div>
          <div>Ingredients:</div>
          {recipe.ingredients.map((ingredient, i) => {
            return (
              <li key={i}>
                {ingredient.quantity} {ingredient.unit} {ingredient.ingredient}
              </li>
            );
          })}
          <div>Instructions: </div>
          <ol>
            {recipe.steps.map((step, i) => {
              return <li key={i}>{step.step}</li>;
            })}
          </ol>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipe.recipe };
}

export default connect(mapStateToProps, actions)(withRouter(RecipeView));
