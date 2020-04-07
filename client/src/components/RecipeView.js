import React from "react";
import { connect } from "react-redux";
import { IoMdTime } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
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
      this.props.history.push("/home");
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
          <div className="view-ingredients-container">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, i) => {
                if (i % 2) {
                  return (
                    <div key={i} className="ing-even">
                      <div className="icon-ing">
                        <FaCheck />
                        <li>
                          {ingredient.quantity} {ingredient.unit}{" "}
                          {ingredient.ingredient}
                        </li>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={i} className="ing-odd">
                      <div className="icon-ing">
                        <FaCheck />
                        <li>
                          {ingredient.quantity} {ingredient.unit}{" "}
                          {ingredient.ingredient}
                        </li>
                      </div>
                    </div>
                  );
                }
              })}
            </ul>
          </div>
          <div className="instructions-container">
            <h3>Instructions</h3>
            <ol>
              {recipe.steps.map((step, i) => {
                return (
                  <div key={i} className="each-step">
                    <p className="step-number">{i + 1}</p>
                    <li className="view-instruction">{step.step}</li>
                  </div>
                );
              })}
            </ol>
          </div>
          <div className="owner">Submitted By: {recipe.user.email}</div>
          {recipe.user._id === this.props.user && (
            <div className="view-button-container">
              <button
                className="form-button delete-btn"
                onClick={this.handleDelete}
              >
                Delete
              </button>
              <button
                className="form-button edit-btn"
                onClick={this.editRecipe}
              >
                Edit
              </button>
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
