import React from "react";
import requireAuth from "../requireAuth";
import RecipeFormTitle from "./RecipeFormTitle";
import RecipeFormDescription from "./RecipeFormDescription";
import RecipeFormTime from "./RecipeFormTime";
import RecipeFormServings from "./RecipeFormServings";

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
        unit: "",
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
        { quantity: "", unit: "", ingredient: "" }
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
    let { ingredients, steps } = this.state;
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
        <fieldset onChange={this.ingredientChange}>
          <button onClick={this.addIngredient}>Add New Ingredient</button>
          {ingredients.map((ingredient, i) => {
            let ingredientID = `ingredient-${i}`;
            let quantityID = `quantity-${i}`;
            let unitID = `unit-${i}`;

            return (
              <div key={i}>
                <label>{`Ingredient ${i + 1}`}</label>
                <label htmlFor={quantityID}>Quantity</label>
                <input
                  type="number"
                  name={quantityID}
                  data-id={i}
                  id={quantityID}
                  className="quantity"
                />
                <label htmlFor={unitID}>Unit</label>
                <select name={unitID} data-id={i} id={unitID} className="unit">
                  <option value="cups">cups</option>
                  <option value="tbs">tbs</option>
                </select>
                <label htmlFor={ingredientID}>Ingredient</label>
                <input
                  type="text"
                  name={ingredientID}
                  data-id={i}
                  id={ingredientID}
                  className="ingredient"
                />
              </div>
            );
          })}
        </fieldset>
        <fieldset onChange={this.stepChange}>
          <button onClick={this.addStep}>Add Step</button>
          {steps.map((step, i) => {
            let stepID = `step-${i}`;

            return (
              <div key={i}>
                <label>{`Step #${i + 1}`}</label>
                <textarea
                  type="text"
                  name={stepID}
                  data-id={i}
                  id={stepID}
                  className="step"
                />
              </div>
            );
          })}
        </fieldset>
      </form>
    );
  }
}

export default requireAuth(CreateRecipe);