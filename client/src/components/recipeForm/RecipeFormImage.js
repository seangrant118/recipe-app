import React, { useRef } from "react";

const RecipeFormImage = props => {
  const fileInput = useRef(null);

  function handleClick() {
    fileInput.current.click();
  }

  return (
    <fieldset className="recipe-form-field">
      <div className="label-container">
        <label className="recipe-form-label">Add an Image</label>
      </div>
      <input
        style={{ display: "none" }}
        onChange={props.handleImageChange}
        type="file"
        ref={fileInput}
      />
      <button onClick={handleClick}>Choose File</button>
      <img src={props.image} alt="recipe" />
    </fieldset>
  );
};

export default RecipeFormImage;
