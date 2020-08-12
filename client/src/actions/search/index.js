import axios from "axios";
import {
  RECIPE_SEARCH,
  INGREDIENT_SEARCH,
  RECIPE_SEARCH_QUERY,
  INGREDIENT_SEARCH_QUERY,
} from "./types";

export const recipeSearch = (searchParam) => ({
  type: RECIPE_SEARCH,
  payload: searchParam,
});

export const ingredientSearch = (searchParam) => ({
  type: INGREDIENT_SEARCH,
  payload: searchParam,
});

export const recipeSearchQuery = (id, callback) => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:3090/search/recipe/" + id
    );
    dispatch({ type: RECIPE_SEARCH_QUERY, payload: response.data });
    callback();
  } catch (e) {
    // console.log(e);
  }
};

export const ingredientSearchQuery = (id, callback) => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://localhost:3090/search/ingredient/" + id
    );
    dispatch({ type: INGREDIENT_SEARCH_QUERY, payload: response.data });
    callback();
  } catch (e) {
    // console.log(e);
  }
};
