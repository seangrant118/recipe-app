import React from "react";
import { Route } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import Welcome from "../components/Welcome";

const AppRouter = () => (
  <div>
    <Route path="/" exact={true} component={Welcome} />
    <AuthRouter />
  </div>
);

export default AppRouter;
