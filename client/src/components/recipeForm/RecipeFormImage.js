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
      <div className="recipe-img-container">
        <img src={props.image} alt="Recipe Image" className="recipe-img" />
      </div>
      <div className="image-button-container">
        <button onClick={handleClick}>Choose File</button>
      </div>
    </fieldset>
  );
};

export default RecipeFormImage;
