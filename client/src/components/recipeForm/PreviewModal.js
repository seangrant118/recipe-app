import React from "react";
import Modal from "react-modal";

const PreviewModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.handleCloseModal}
    contentLabel="Recipe Preview"
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
  >
    <div>
      <h1>{props.state.title}</h1>
      <p>{props.state.description}</p>
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
      <button onClick={props.handleCloseModal}>Close Modal</button>
      <button onClick={props.submitRecipe}>Submit Recipe!</button>
    </div>
  </Modal>
);

export default PreviewModal;
