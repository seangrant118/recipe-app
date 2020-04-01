import React from "react";
import Modal from "react-modal";
import "../styles/recipeForm/PreviewModal.css";

const style = {
  width: "50px",
  height: "50px"
};

Modal.defaultStyles = {};
const PreviewModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.handleCloseModal}
    contentLabel="Recipe Preview"
    closeTimeoutMS={500}
    className="modal"
    ariaHideApp={false}
  >
    <div>
      <div className="exit-btn" onClick={props.handleCloseModal}>
        x
      </div>
      <div className="modal-container">
        <h1 className="preview-title">{props.state.title}</h1>
        <p>{props.state.description}</p>
        <img style={style} src={props.state.image} alt="recipe" />
        <p>
          Cook Time: {props.state.cookTime} {props.state.cookTimeUnit}
        </p>
        <p>
          Prep Time: {props.state.prepTime} {props.state.prepTimeUnit}
        </p>
        <p>Servings: {props.state.servings}</p>
        <h5>Ingredients</h5>
        <ul>
          {props.state.ingredients.map((ingredient, i) => {
            return (
              <li key={i}>
                {ingredient.quantity} {ingredient.unit} {ingredient.ingredient}
              </li>
            );
          })}
        </ul>
        <h5>Instructions</h5>
        <ol>
          {props.state.steps.map((step, i) => {
            return (
              <li key={i}>
                Step {i + 1}: {step.step}
              </li>
            );
          })}
        </ol>
        <button className="form-button" onClick={props.handleCloseModal}>
          Close Modal
        </button>
        <button className="form-button" onClick={props.submitRecipe}>
          Submit Recipe!
        </button>
      </div>
    </div>
  </Modal>
);

export default PreviewModal;
