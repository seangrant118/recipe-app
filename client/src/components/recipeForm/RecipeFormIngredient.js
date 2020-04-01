import React from "react";

const RecipeFormIngredient = props => {
  let { ingredients } = props;
  return (
    <form>
      <fieldset className="recipe-form-field" onChange={props.ingredientChange}>
        <button onClick={props.addIngredient} className="form-button">
          Add New Ingredient
        </button>
        {ingredients &&
          ingredients.map((ingredient, i) => {
            let ingredientID = `ingredient-${i}`;
            let quantityID = `quantity-${i}`;
            let unitID = `unit-${i}`;

            return (
              <div className="ingredient-container" key={i}>
                <label className="recipe-form-label">{`Ingredient ${i +
                  1}`}</label>
                <label className="recipe-form-label" htmlFor={quantityID}>
                  Quantity
                </label>
                <input
                  type="number"
                  name={quantityID}
                  data-id={i}
                  id={quantityID}
                  className="quantity"
                  value={ingredient.quantity}
                  onChange={props.ingredientChange}
                />
                <label className="recipe-form-label" htmlFor={unitID}>
                  Unit
                </label>
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
                </select>
                <label className="recipe-form-label" htmlFor={ingredientID}>
                  Ingredient
                </label>
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
            );
          })}
      </fieldset>
    </form>
  );
};

export default RecipeFormIngredient;
