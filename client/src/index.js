import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import AppRouter from "./routers/AppRouter";
import reducers from "./reducers";

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
        <AppRouter />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
