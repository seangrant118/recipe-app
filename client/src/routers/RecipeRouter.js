import React from "react";
import { Route } from "react-router-dom";
import CreateRecipe from "../components/CreateRecipe";

const RecipeRouter = () => (
  <div>
    <Route path="/createrecipe" component={CreateRecipe} />
  </div>
);

export default RecipeRouter;
