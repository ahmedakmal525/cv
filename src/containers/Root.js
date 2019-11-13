// @flow
import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Routes from "../routes";

type Props = {
  store: Object,
  history: {}
};

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default Root;
