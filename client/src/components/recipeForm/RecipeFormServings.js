import React from "react";

const RecipeFormServings = props => {
  return (
    <fieldset className="recipe-form-field">
      <div className="label-container">
        <label className="recipe-form-label">Servings</label>
      </div>
      <input
        className="recipe-form-input servings"
        name="servings"
        type="number"
        placeholder="0"
        value={props.servings}
        onChange={props.servingChange}
      />
    </fieldset>
  );
};

export default RecipeFormServings;
