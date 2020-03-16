import React from "react";

const RecipeFormTime = props => {
  return (
    <fieldset>
      <label>Cook Time</label>
      <input
        name="cook time"
        type="number"
        placeholder="cook time"
        value={props.cooktime.time}
        onChange={props.cookTimeChange}
      />
      <select value={props.cooktime.unit} onChange={props.cookUnitChange}>
        <option value="Mins">Mins</option>
        <option value="Hrs">Hrs</option>
      </select>
      <label>Prep Time</label>
      <input
        name="prep time"
        type="number"
        placeholder="prep time"
        value={props.preptime.time}
        onChange={props.prepTimeChange}
      />
      <select value={props.preptime.unit} onChange={props.prepUnitChange}>
        <option value="Mins">Mins</option>
        <option value="Hrs">Hrs</option>
      </select>
    </fieldset>
  );
};

export default RecipeFormTime;
