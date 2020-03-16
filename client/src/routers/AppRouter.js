import React from "react";
import { Route } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import Welcome from "../components/Welcome";
import SearchRouter from "./SearchRouter";
import RecipeRouter from "./RecipeRouter";

const AppRouter = () => (
  <div>
    <Route path="/" exact={true} component={Welcome} />
    <AuthRouter />
    <SearchRouter />
    <RecipeRouter />
  </div>
);

export default AppRouter;
