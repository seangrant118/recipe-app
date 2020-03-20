import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/recipe";
import requireAuth from "../requireAuth";
import RecipeFormTitle from "./RecipeFormTitle";
import RecipeFormDescription from "./RecipeFormDescription";
import RecipeFormTime from "./RecipeFormTime";
import RecipeFormServings from "./RecipeFormServings";
import RecipeFormIngredient from "./RecipeFormIngredient";
import RecipeFormSteps from "./RecipeFormSteps";
import PreviewModal from "./PreviewModal";

class CreateRecipe extends React.Component {
  state = {
    _id: this.props.recipe._id,
    title: this.props.recipe.title,
    description: this.props.recipe.description,
    cookTime: this.props.recipe.cookTime,
    cookTimeUnit: this.props.recipe.cookTimeUnit,
    prepTime: this.props.recipe.prepTime,
    prepTimeUnit: this.props.recipe.prepTimeUnit,
    servings: this.props.recipe.servings,
    ingredients: this.props.recipe.ingredients,
    steps: this.props.recipe.steps,
    userID: this.props.recipe.user._id,
    isOpen: false,
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
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addIngredient = e => {
    e.preventDefault();
    this.setState(prevState => ({
      ingredients: [
        ...prevState.ingredients,
        { quantity: "", unit: "cups", ingredient: "" }
      ]
    }));
  };
  ingredientChange = e => {
    if (["quantity", "unit", "ingredient"].includes(e.target.className)) {
      let ingredients = [...this.state.ingredients];
      ingredients[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ ingredients }, () => console.log(this.state.ingredients));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
      console.log(e.target);
    }
  };
  addStep = e => {
    e.preventDefault();
    this.setState(prevState => ({
      steps: [...prevState.steps, { step: "" }]
    }));
  };
  stepChange = e => {
    if (["step"].includes(e.target.className)) {
      let steps = [...this.state.steps];
      steps[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ steps }, () => console.log(this.state.steps));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleCloseModal = () => {
    this.setState(() => ({ isOpen: false }));
  };
  editRecipe = () => {
    const id = this.props.match.params.id;
    const editedRecipe = this.state;
    this.props.editRecipe(id, editedRecipe, () => {
      this.props.history.push("/recipes/" + this.state._id);
    });
  };
  render() {
    if (this.state.loaded) {
      return (
        <div>
          <RecipeFormTitle
            titleChange={this.handleChange}
            title={this.state.title}
          />
          <RecipeFormDescription
            descriptionChange={this.handleChange}
            description={this.state.description}
          />
          <RecipeFormTime state={this.state} onChange={this.handleChange} />
          <RecipeFormServings
            servings={this.state.servings}
            servingChange={this.handleChange}
          />
          <RecipeFormIngredient
            ingredientChange={this.ingredientChange}
            addIngredient={this.addIngredient}
            ingredients={this.state.ingredients}
          />
          <RecipeFormSteps
            stepChange={this.stepChange}
            addStep={this.addStep}
            steps={this.state.steps}
          />
          <button onClick={() => this.setState(() => ({ isOpen: true }))}>
            Preview
          </button>
          <PreviewModal
            isOpen={this.state.isOpen}
            handleCloseModal={this.handleCloseModal}
            state={this.state}
            submitRecipe={this.editRecipe}
          />
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

function mapStateToProps(state) {
  return { recipe: state.recipe.recipe, user: state.auth.user };
}

export default connect(mapStateToProps, actions)(requireAuth(CreateRecipe));