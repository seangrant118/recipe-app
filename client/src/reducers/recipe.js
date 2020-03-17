import { CREATE_RECIPE, CREATE_ERROR } from "../actions/recipe/types";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_RECIPE:
      return { ...state, recipe: action.payload };
    case CREATE_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
