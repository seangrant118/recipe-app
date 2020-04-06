import React from "react";
import { connect } from "react-redux";
import { IoMdTime } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import * as actions from "../actions/recipe";
import "./styles/RecipeView.css";

class RecipeView extends React.Component {
  state = {
    loaded: false,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getRecipe(id, () => {
      this.setState({
        loaded: true,
      });
    });
  }
  handleDelete = () => {
    this.setState({ loading: false });
    const id = this.props.match.params.id;
    this.props.deleteRecipe(id, () => {
      this.props.history.push("/");
    });
  };
  editRecipe = () => {
    const id = this.props.match.params.id;
    this.props.history.push("/edit/recipe/" + id);
  };
  render() {
    const { recipe } = this.props;
    if (this.state.loaded) {
      return (
        <div className="recipe-view-container">
          <h1 className="recipe-title">{recipe.title}</h1>
          <div className="description-container">
            <div className="description">{recipe.description}</div>
          </div>
          <div className="image-info-container">
            <div className="image-container">
              <img src={recipe.image} alt="recipe" />
            </div>
            <div className="view-info-container">
              <div className="icon-desc">
                <IoMdTime className="time-icon" />
                <p>
                  Cook Time: {recipe.cookTime} {recipe.cookTimeUnit}
                </p>
              </div>
              <div className="icon-desc">
                <IoMdTime className="time-icon" />
                <p>
                  Prep Time: {recipe.prepTime} {recipe.prepTimeUnit}
                </p>
              </div>
              <div className="icon-desc">
                <AiOutlinePieChart className="serving-icon" />
                <p>Servings: {recipe.servings}</p>
              </div>
            </div>
          </div>

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
              <button onClick={this.handleDelete}>Delete</button>
              <button onClick={this.editRecipe}>edit</button>
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
