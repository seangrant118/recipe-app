import React from "react";
import { Route } from "react-router-dom";
import RecipeSearch from "../components/search/RecipeSearch";
import IngredientSearch from "../components/search/IngredientSearch";

const SearchRouter = () => (
  <div>
    <Route path="/search/recipe/:id" component={RecipeSearch} />
    <Route path="/search/ingredient/:id" component={IngredientSearch} />
  </div>
);

export default SearchRouter;
