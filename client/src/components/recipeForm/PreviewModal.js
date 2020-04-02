import React from "react";
import Modal from "react-modal";
import { IoMdTime } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import "../styles/recipeForm/PreviewModal.css";

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
        <div className="description-container">
          <p className="description">{props.state.description}</p>
        </div>
        <div className="image-info-container">
          <div className="image-container">
            <img
              className="preview-image"
              src={props.state.image}
              alt="recipe"
            />
          </div>
          <div className="info-container">
            <div className="icon-desc">
              <IoMdTime className="time-icon" />
              <p>
                Cook Time: {props.state.cookTime} {props.state.cookTimeUnit}
              </p>
            </div>
            <div className="icon-desc">
              <IoMdTime className="time-icon" />
              <p>
                Prep Time: {props.state.prepTime} {props.state.prepTimeUnit}
              </p>
            </div>
            <div className="icon-desc">
              <AiOutlinePieChart className="serving-icon" />
              <p>Servings: {props.state.servings}</p>
            </div>
          </div>
        </div>
        <div className="ingredients-container">
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {props.state.ingredients.map((ingredient, i) => {
              if (i % 2) {
                return (
                  <div className="ing-even">
                    <div className="icon-ing">
                      <FaCheck />
                      <li key={i}>
                        {ingredient.quantity} {ingredient.unit}{" "}
                        {ingredient.ingredient}
                      </li>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="ing-odd">
                    <div className="icon-ing">
                      <FaCheck />
                      <li key={i}>
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
        <div>
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
        </div>

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
