import React from "react";
import { Route } from "react-router-dom";
import Feature from "../components/Feature";
import Signout from "../components/auth/Signout";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";

const AuthRouter = () => (
  <div>
    <Route path="/signup" component={Signup} />
    <Route path="/feature" component={Feature} />
    <Route path="/signout" component={Signout} />
    <Route path="/signin" component={Signin} />
  </div>
);

export default AuthRouter;
