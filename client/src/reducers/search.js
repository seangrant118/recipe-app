import {
  RECIPE_SEARCH,
  INGREDIENT_SEARCH,
  RECIPE_SEARCH_QUERY,
  INGREDIENT_SEARCH_QUERY
} from "../actions/search/types";

export default function(state = {}, action) {
  switch (action.type) {
    case RECIPE_SEARCH:
      return { ...state, recipeSearchItem: action.payload };
    case INGREDIENT_SEARCH:
      return { ...state, recipeSearchItem: action.payload };
    case RECIPE_SEARCH_QUERY:
      return { ...state, recipeSearchResults: action.payload };
    case INGREDIENT_SEARCH_QUERY:
      return { ...state, ingredientSearchResults: action.payload };
    default:
      return state;
  }
}
