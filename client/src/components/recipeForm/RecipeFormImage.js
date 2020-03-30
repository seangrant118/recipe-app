import React from "react";

const RecipeFormImage = props => {
  return (
    <fieldset className="recipe-form-field">
      <input onChange={props.handleImageChange} type="file" />
      <img src={props.image} alt="recipe" />
    </fieldset>
  );
};

export default RecipeFormImage;
