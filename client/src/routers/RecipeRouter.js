import React from "react";
import { Route } from "react-router-dom";
import CreateRecipe from "../components/recipeForm/CreateRecipe";
import RecipeView from "../components/RecipeView";
import EditRecipe from "../components/recipeForm/EditRecipe";
import Welcome from "../components/Welcome";

const RecipeRouter = () => (
  <div>
    <Route path="/home" component={Welcome} />
    <Route path="/createrecipe" component={CreateRecipe} />
    <Route path="/recipes/:id" component={RecipeView} />
    <Route path="/edit/recipe/:id" component={EditRecipe} />
  </div>
);

export default RecipeRouter;
