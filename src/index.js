import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";//
import { watchCounterUp } from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();
//Creates a Redux middleware and connects the Sagas to the Redux Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(watchCounterUp);// to run SagaMiddleware
//middleware will iterate over the Generator fxn (watchCounterUp) and execute all yielded Effects.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
