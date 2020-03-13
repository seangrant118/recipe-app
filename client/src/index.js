import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import reducers from "./reducers";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const composeEnhancers = compose(
  applyMiddleware(reduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem("token")
    }
  },
  composeEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact={true} component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
