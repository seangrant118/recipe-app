import React from "react";

const RecipeFormImage = props => {
  return (
    <fieldset>
      <input onChange={props.handleImageChange} type="file" />
      <img src={props.image}></img>
    </fieldset>
  );
};

export default RecipeFormImage;
