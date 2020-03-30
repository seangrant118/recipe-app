import React from "react";

const RecipeFormTime = props => {
  return (
    <fieldset className="recipe-form-field">
      <label>Cook Time</label>
      <input
        name="cookTime"
        type="number"
        placeholder="cook time"
        value={props.state.cookTime}
        onChange={props.onChange}
      />
      <select
        name="cookTimeUnit"
        value={props.state.cookTimeUnit}
        onChange={props.onChange}
      >
        <option value="Mins">Mins</option>
        <option value="Hrs">Hrs</option>
      </select>
      <label>Prep Time</label>
      <input
        name="prepTime"
        type="number"
        placeholder="prep time"
        value={props.state.prepTime}
        onChange={props.onChange}
      />
      <select
        name="prepTimeUnit"
        value={props.state.prepTimeUnit}
        onChange={props.onChange}
      >
        <option value="Mins">Mins</option>
        <option value="Hrs">Hrs</option>
      </select>
    </fieldset>
  );
};

export default RecipeFormTime;
