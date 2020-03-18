import axios from "axios";
import { CREATE_RECIPE, CREATE_ERROR, GET_RECIPE } from "./types";

export const createRecipe = (newRecipe, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/createrecipe",
      newRecipe
    );
    console.log(response);
    dispatch({ type: CREATE_RECIPE, payload: response.data });
    callback();
  } catch (e) {
    dispatch({ type: CREATE_ERROR, payload: "There was an error" });
  }
};

export const getRecipe = (id, callback) => async dispatch => {
  try {
    const response = await axios.get("http://localhost:3090/recipe/" + id);
    dispatch({ type: GET_RECIPE, payload: response.data });
    callback();
  } catch (e) {
    dispatch({ type: CREATE_ERROR, payload: "There was an error" });
  }
};