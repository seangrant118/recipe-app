import { RECIPE_SEARCH } from "./types";

export const recipeSearch = searchParam => ({
  type: RECIPE_SEARCH,
  payload: searchParam
});
