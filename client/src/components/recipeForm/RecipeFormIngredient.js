import React from "react";

const RecipeFormIngredient = props => {
  let { ingredients } = props;
  return (
    <form>
      <fieldset onChange={props.ingredientChange}>
        <button onClick={props.addIngredient}>Add New Ingredient</button>
        {ingredients &&
          ingredients.map((ingredient, i) => {
            let ingredientID = `ingredient-${i}`;
            let quantityID = `quantity-${i}`;
            let unitID = `unit-${i}`;

            return (
              <div key={i}>
                <label>{`Ingredient ${i + 1}`}</label>
                <label htmlFor={quantityID}>Quantity</label>
                <input
                  type="number"
                  name={quantityID}
                  data-id={i}
                  id={quantityID}
                  className="quantity"
                />
                <label htmlFor={unitID}>Unit</label>
                <select name={unitID} data-id={i} id={unitID} className="unit">
                  <option value="cups">cups</option>
                  <option value="tbs">tbs</option>
                </select>
                <label htmlFor={ingredientID}>Ingredient</label>
                <input
                  type="text"
                  name={ingredientID}
                  data-id={i}
                  id={ingredientID}
                  className="ingredient"
                />
              </div>
            );
          })}
      </fieldset>
    </form>
  );
};

export default RecipeFormIngredient;
