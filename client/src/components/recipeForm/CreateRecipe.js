import React from "react";
import requireAuth from "../requireAuth";
import RecipeFormTitle from "./RecipeFormTitle";
import RecipeFormDescription from "./RecipeFormDescription";
import RecipeFormTime from "./RecipeFormTime";
import RecipeFormServings from "./RecipeFormServings";
import RecipeFormIngredient from "./RecipeFormIngredient";
import RecipeFormSteps from "./RecipeFormSteps";

class CreateRecipe extends React.Component {
  state = {
    title: "",
    description: "",
    cooktime: {
      time: "",
      unit: "Mins"
    },
    preptime: {
      time: "",
      unit: "Mins"
    },
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
    ]
  };
  titleChange = e => {
    let title = e.target.value;
    this.setState({
      title
    });
  };
  descriptionChange = e => {
    const description = e.target.value;
    this.setState({
      description
    });
  };
  cookTimeChange = e => {
    const time = e.target.value;
    this.setState(prevState => ({
      cooktime: { ...prevState.cooktime, time }
    }));
  };
  cookUnitChange = e => {
    const unit = e.target.value;
    this.setState(prevState => ({
      cooktime: { ...prevState.cooktime, unit }
    }));
  };
  prepTimeChange = e => {
    const time = e.target.value;
    this.setState(prevState => ({
      preptime: { ...prevState.preptime, time }
    }));
  };
  prepUnitChange = e => {
    const unit = e.target.value;
    this.setState(prevState => ({
      preptime: { ...prevState.preptime, unit }
    }));
  };
  servingChange = e => {
    const servings = e.target.value;
    this.setState({
      servings
    });
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
  render() {
    return (
      <form>
        <RecipeFormTitle
          titleChange={this.titleChange}
          title={this.state.title}
        />
        <RecipeFormDescription
          descriptionChange={this.descriptionChange}
          description={this.state.description}
        />
        <RecipeFormTime
          cooktime={this.state.cooktime}
          preptime={this.state.preptime}
          cookTimeChange={this.cookTimeChange}
          cookUnitChange={this.cookUnitChange}
          prepTimeChange={this.prepTimeChange}
          prepUnitChange={this.prepUnitChange}
        />
        <RecipeFormServings
          servings={this.state.servings}
          servingChange={this.servingChange}
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
        <button onSubmit={console.log("submit")}>Submit</button>
      </form>
    );
  }
}

export default requireAuth(CreateRecipe);
