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
        <img
          src={
            props.image
              ? props.image
              : "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-delicious-dinner-461198.jpg&fm=jpg"
          }
          alt="Recipe"
          className="recipe-img"
        />
      </div>
      <div className="img-button-container">
        <button onClick={handleClick} className="form-button">
          Choose File
        </button>
      </div>
    </fieldset>
  );
};

export default RecipeFormImage;
