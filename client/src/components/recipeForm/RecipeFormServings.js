import React from "react";

const RecipeFormServings = props => {
  return (
    <fieldset className="recipe-form-field">
      <label className="recipe-form-label">Servings</label>
      <input
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
