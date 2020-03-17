import axios from "axios";
import { CREATE_RECIPE } from "./types";

export const createRecipe = () => {
  axios.post("http://localhost:3090/createrecipe");
};
