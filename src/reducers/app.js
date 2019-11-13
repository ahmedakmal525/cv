// @flow
import { ON_LOCALE_CHANGE } from "../constants";

export default function app(state: Object = {}, action: Object) {
  switch (action.type) {
    case ON_LOCALE_CHANGE:
      return { ...state, locale: action.locale };
    default:
      return state;
  }
}
