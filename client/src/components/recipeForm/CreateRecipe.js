import React from "react";
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
    title: "",
    description: "",
    cookTime: "",
    cookTimeUnit: "Mins",
    prepTime: "",
    prepTimeUnit: "Mins",
    servings: 0,
    ingredients: [
      {
        quantity: "",
        unit: "cups",
        ingredient: ""
      }
    ],
    steps: [
      {
        step: ""
      }
    ],
    isOpen: false
  };
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
  render() {
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
        />
      </div>
    );
  }
}

export default requireAuth(CreateRecipe);
