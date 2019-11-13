// @flow
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/Questrial-Regular.ttf";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

import i18n from "./utils/i18n";
import Root from "./containers/Root";
import { configureStore, history } from "./store";

const store = configureStore();
// eslint-disable-next-line no-undef
const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Root store={store} history={history} />
    </I18nextProvider>,
    root
  );
}
