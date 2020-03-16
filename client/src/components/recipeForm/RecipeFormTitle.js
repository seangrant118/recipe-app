import React from "react";

const RecipeFormTitle = props => {
  return (
    <fieldset>
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
