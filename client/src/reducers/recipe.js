import {
  CREATE_RECIPE,
  CREATE_ERROR,
  GET_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE
} from "../actions/recipe/types";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_RECIPE:
      return { ...state, recipe: action.payload };
    case GET_RECIPE:
      return { ...state, recipe: action.payload };
    case DELETE_RECIPE:
      return { ...state, recipe: action.payload };
    case EDIT_RECIPE:
      return { ...state, recipe: action.payload };
    case CREATE_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
