import React from "react";

const RecipeFormTitle = props => {
  return (
    <fieldset className="recipe-form-field">
      <div className="label-container">
        <label className="recipe-form-label">Title</label>
      </div>
      <input
        className="recipe-form-input"
        name="title"
        type="text"
        placeholder="Title"
        value={props.title}
        onChange={props.titleChange}
      />
    </fieldset>
  );
};

export default RecipeFormTitle;
