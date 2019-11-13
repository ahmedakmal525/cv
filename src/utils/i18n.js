// @flow
import i18n from "i18next";
import XHR from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en.json";
import ta from "../locales/ta.json";
import si from "../locales/si.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      "en-US": { translations: en },
      ta: { translations: ta },
      si: { translations: si }
    },
    fallbackLng: "en",
    ns: ["translations"],
    defaultNS: "translations",

    react: {
      useSuspense: false,
      wait: true
    }
  });

export default i18n;
