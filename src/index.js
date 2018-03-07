import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import productsReducer from "./reducers/productsReducer";
import userReducer from "./reducers/userReducer";

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const allStoreEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Thomas"
  },
  allStoreEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
