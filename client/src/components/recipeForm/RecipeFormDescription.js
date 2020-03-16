import React from "react";

const RecipeFormDescription = props => {
  return (
    <fieldset>
      <label>Description</label>
      <textarea
        name="description"
        type="text"
        placeholder="description"
        value={props.description}
        onChange={props.descriptionChange}
      />
    </fieldset>
  );
};

export default RecipeFormDescription;
