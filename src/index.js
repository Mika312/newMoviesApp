import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";

import App from "./containers/app";
// import reducers from "./reducers";

// const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = "dcb8af96b8ac2447c12f8ea6e5dcb186";

ReactDOM.render(
  // <Provider
  //   store={createStoreWithMiddleware(
  //     reducers,
  //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //       window.__REDUX_DEVTOOLS_EXTENSION__()
  //   )}
  // >
  <App />,
  // </Provider>,
  document.querySelector(".container")
);
