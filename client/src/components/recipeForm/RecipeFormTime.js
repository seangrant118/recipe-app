import React from "react";

const RecipeFormTime = props => {
  return (
    <fieldset className="recipe-form-field">
      <div className="label-container">
        <label className="recipe-form-label">Cook Time</label>
      </div>
      <input
        className="recipe-form-input time-input"
        name="cookTime"
        type="number"
        placeholder="0"
        value={props.state.cookTime}
        onChange={props.onChange}
      />
      <select
        className="recipe-form-input select"
        name="cookTimeUnit"
        value={props.state.cookTimeUnit}
        onChange={props.onChange}
      >
        <option value="Mins">Mins</option>
        <option value="Hrs">Hrs</option>
      </select>
      <div className="label-container">
        <label className="recipe-form-label">Prep Time</label>
      </div>
      <input
        className="recipe-form-input time-input"
        name="prepTime"
        type="number"
        placeholder="0"
        value={props.state.prepTime}
        onChange={props.onChange}
      />
      <select
        className="recipe-form-input select"
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
