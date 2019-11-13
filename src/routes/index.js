// @flow
import React from "react";
import { Switch, Route } from "react-router";
import { APP, NOT_FOUND } from "../constants";
import App from "../containers/App";
import NotFound from "../containers/NotFound";

// eslint-disable-next-line react/display-name
export default () => (
  <App>
    <Switch>
      <Route path={APP} component={App} />
      <Route path={NOT_FOUND} component={NotFound} />
    </Switch>
  </App>
);
