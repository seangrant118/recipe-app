import React from "react";

const RecipeFormTitle = props => {
  return (
    <fieldset className="recipe-form-field">
      <label>Title</label>
      <input
        name="title"
        type="text"
        placeholder="title"
        value={props.title}
        onChange={props.titleChange}
      />
    </fieldset>
  );
};

export default RecipeFormTitle;
