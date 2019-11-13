// @flow
import { ON_LOCALE_CHANGE } from "../constants";
import type { Action } from "../typings/actions";

export const onLocaleChange = (locale?: string = "en-US"): Action => ({
  type: ON_LOCALE_CHANGE,
  locale
});
