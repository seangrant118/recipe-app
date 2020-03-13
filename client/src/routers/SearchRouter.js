import React from "react";
import { Route } from "react-router-dom";
import RecipeSearch from "../components/search/RecipeSearch";

const SearchRouter = () => (
  <div>
    <Route path="/search/recipe/:id" component={RecipeSearch} />
  </div>
);

export default SearchRouter;
