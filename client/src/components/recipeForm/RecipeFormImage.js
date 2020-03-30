import React from "react";

const RecipeFormImage = props => {
  return (
    <fieldset className="recipe-form-field">
      <label className="recipe-form-label">Add an Image</label>
      <input onChange={props.handleImageChange} type="file" />
      <img src={props.image} alt="recipe" />
    </fieldset>
  );
};

export default RecipeFormImage;
