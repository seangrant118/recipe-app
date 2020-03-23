import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import SearchRouter from "./SearchRouter";
import RecipeRouter from "./RecipeRouter";
import Header from "../components/Header";
import Landing from "../components/Landing";

const AppRouter = () => (
  <div>
    <Switch>
      <Route path="/" exact={true} component={Landing} />
      <Header />
    </Switch>
    <AuthRouter />
    <SearchRouter />
    <RecipeRouter />
  </div>
);

export default AppRouter;
