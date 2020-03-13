import React from "react";
import { useParams, Route } from "react-router-dom";
import RecipeSearch from "../components/search/RecipeSearch";

const SearchRouter = () => (
  <div>
    <Route path="/search/:id" component={RecipeSearch} />
  </div>
);

export default SearchRouter;
