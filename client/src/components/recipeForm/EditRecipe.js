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
import RecipeFormImage from "./RecipeFormImage";
import { storage } from "../../fb";
import "../styles/recipeForm/recipeForm.css";

class CreateRecipe extends React.Component {
  state = {
    _id: this.props.recipe._id,
    title: this.props.recipe.title,
    description: this.props.recipe.description,
    image: this.props.recipe.image,
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
    this.props.editRecipe(editedRecipe, () => {
      this.props.getRecipe(id, () => {
        this.props.history.push("/recipes/" + id);
      });
    });
  };
  handleImageChange = e => {
    if (e.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(e.target.files[0])
      });
      let currentImageName = "firebase-image-" + Date.now();
      let uploadImage = storage
        .ref(`images/${currentImageName}`)
        .put(e.target.files[0]);

      uploadImage.on(
        "state_changed",
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(currentImageName)
            .getDownloadURL()
            .then(url => {
              this.setState({
                image: url
              });
            });
        }
      );
    }
  };
  render() {
    if (this.state.loaded) {
      return (
        <div className="form-container">
          <div className="form-recipe-header-container">
            <h2 className="form-recipe-header">
              Edit <em>{this.state.title}</em>
            </h2>
          </div>
          <RecipeFormTitle
            titleChange={this.handleChange}
            title={this.state.title}
          />
          <RecipeFormDescription
            descriptionChange={this.handleChange}
            description={this.state.description}
          />
          <RecipeFormImage
            handleImageChange={this.handleImageChange}
            image={this.state.image}
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
          <div className="preview-button-container">
            <button
              className="preview-button form-button"
              onClick={() => this.setState(() => ({ isOpen: true }))}
            >
              Preview
            </button>
          </div>

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
