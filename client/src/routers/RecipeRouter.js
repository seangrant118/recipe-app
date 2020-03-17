import React from "react";
import { Route } from "react-router-dom";
import CreateRecipe from "../components/recipeForm/CreateRecipe";
import RecipeView from "../components/RecipeView";

const RecipeRouter = () => (
  <div>
    <Route path="/createrecipe" component={CreateRecipe} />
    <Route path="/recipes/:id" component={RecipeView} />
  </div>
);

export default RecipeRouter;
