import React from "react";

const RecipeFormDescription = props => {
  return (
    <fieldset className="recipe-form-field">
      <div className="label-container">
        <label className="recipe-form-label">Description</label>
      </div>
      <textarea
        className="recipe-form-input form-textarea"
        name="description"
        type="text"
        placeholder="Description"
        value={props.description}
        onChange={props.descriptionChange}
      />
    </fieldset>
  );
};

export default RecipeFormDescription;
