import React from "react";
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
    const { recipe } = this.props;
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
          <div>Created By: {recipe.user.email}</div>
          {recipe.user._id === this.props.user && (
            <div>
              <button>Delete</button>
              <button>edit</button>
            </div>
          )}
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipe.recipe, user: state.auth.user };
}

export default connect(mapStateToProps, actions)(RecipeView);
