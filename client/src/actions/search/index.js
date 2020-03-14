import { RECIPE_SEARCH, INGREDIENT_SEARCH } from "./types";

export const recipeSearch = searchParam => ({
  type: RECIPE_SEARCH,
  payload: searchParam
});

export const ingredientSearch = searchParam => ({
  type: INGREDIENT_SEARCH,
  payload: searchParam
});
