import { RECIPE_SEARCH } from "../actions/search/types";

export default function(state = {}, action) {
  switch (action.type) {
    case RECIPE_SEARCH:
      return { ...state, recipeSearchItem: action.payload };
    default:
      return state;
  }
}
