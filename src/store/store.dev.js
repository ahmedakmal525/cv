import { createStore, applyMiddleware, compose } from "redux";
import { createHashHistory } from "history";
import { routerMiddleware, routerActions } from "connected-react-router";
import { createLogger } from "redux-logger";
import createRootReducer from "../reducers";
import * as appActions from "../actions";

const history = createHashHistory();

const rootReducer = createRootReducer(history);

const configureStore = initialState => {
  const middleware = [];
  const enhancers = [];

  const logger = createLogger({
    level: "info",
    collapsed: true
  });

  // Skip redux logs in console during the tests
  if (process.env.NODE_ENV !== "test") {
    middleware.push(logger);
  }

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    ...appActions,
    ...routerActions
  };

  /* eslint-disable no-underscore-dangle */
  // eslint-disable-next-line no-undef
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // eslint-disable-next-line no-undef
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://extension.remotedev.io/docs/API/Arguments.html
        actionCreators
      })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Creating the store.
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(
      "../reducers",
      // eslint-disable-next-line global-require
      () => store.replaceReducer(require("../reducers").default)
    );
  }

  return store;
};

export default { configureStore, history };
