import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./auth";
import search from "./search";
import recipe from "./recipe";

export default combineReducers({
  auth,
  form: formReducer,
  search,
  recipe
});
