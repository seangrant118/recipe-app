import React from "react";

const RecipeFormIngredient = (props) => {
  let { ingredients } = props;
  return (
    <form>
      <fieldset
        className="recipe-form-field"
        id="ingredient-input-field"
        onChange={props.ingredientChange}
      >
        <div className="label-container">
          <label className="recipe-form-label">Ingredients</label>
        </div>
        {ingredients &&
          ingredients.map((ingredient, i) => {
            let ingredientID = `ingredient-${i}`;
            let quantityID = `quantity-${i}`;
            let unitID = `unit-${i}`;

            return (
              <div className="ingredient-container" key={i}>
                <div className="ingredient-number-label-container">
                  <label className="recipe-form-label">{`#${i + 1}`}</label>
                </div>
                <div className="ingredient-item-container">
                  <div className="label-container">
                    <label className="recipe-form-label" htmlFor={quantityID}>
                      Quantity
                    </label>
                  </div>
                  <input
                    type="number"
                    name={quantityID}
                    data-id={i}
                    id={quantityID}
                    className="quantity"
                    placeholder="0"
                    value={ingredient.quantity}
                    onChange={props.ingredientChange}
                  />
                </div>
                <div className="ingredient-item-container">
                  <div className="label-container">
                    <label className="recipe-form-label" htmlFor={unitID}>
                      Unit
                    </label>
                  </div>
                  <select
                    name={unitID}
                    data-id={i}
                    id={unitID}
                    className="unit"
                    value={props.unit}
                    onChange={props.ingredientChange}
                  >
                    <option value="cups">cups</option>
                    <option value="tbs">tbs</option>
                    <option value="tbs">tsp</option>
                    <option value="tbs">piece</option>
                    <option value="tbs">oz</option>
                    <option value="tbs">lb</option>
                    <option value="tbs">grams</option>
                    <option value="tbs">liter</option>
                    <option value="tbs">quart</option>
                    <option value="tbs"></option>
                  </select>
                </div>
                <div className="ingredient-item-container">
                  <div className="label-container">
                    <label className="recipe-form-label" htmlFor={ingredientID}>
                      Ingredient
                    </label>
                  </div>
                  <input
                    type="text"
                    name={ingredientID}
                    data-id={i}
                    id={ingredientID}
                    className="ingredient"
                    value={ingredient.ingredient}
                    onChange={props.ingredientChange}
                  />
                </div>
              </div>
            );
          })}
        <button onClick={props.addIngredient} className="form-button">
          Add New Ingredient
        </button>
      </fieldset>
    </form>
  );
};

export default RecipeFormIngredient;
