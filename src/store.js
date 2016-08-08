import {applyMiddleware, createStore} from "redux";

import logger from "redux-logger";

import reducer from "./reducers";

let middlewares = [
  logger(),
];

const middleware = applyMiddleware(...middlewares);

export default createStore(reducer, middleware);
