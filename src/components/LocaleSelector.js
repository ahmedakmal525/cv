// @flow
import "./styles/localeSelector.css";

import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import Emoji from "./Emoji";
import buttonStyles from "./styles/localeSelector";

const onLocaleButtonClicked = (
  locale: string,
  onLocaleChange: Function,
  i18n: Object
): void => {
  i18n.changeLanguage(locale);
  onLocaleChange(locale);
};

const isLocaleButtonActive = (
  buttonLocale: string,
  selectedLocale: string
): boolean => buttonLocale === selectedLocale;

type Props = { locale: string, onLocaleChange: Function, i18n: Object };
const LocaleSelector = ({ locale, onLocaleChange, i18n }: Props) => (
  <div className="Locale-Row">
    <ButtonGroup>
      <Button
        style={buttonStyles}
        color="info"
        onClick={() => {
          onLocaleButtonClicked("en-US", onLocaleChange, i18n);
        }}
        active={isLocaleButtonActive(locale, "en-US")}
      >
        English <Emoji symbol="🇬🇧" label="uk" />
      </Button>
      <Button
        style={buttonStyles}
        color="info"
        onClick={() => {
          onLocaleButtonClicked("ta", onLocaleChange, i18n);
        }}
        active={isLocaleButtonActive(locale, "ta")}
      >
        தமிழ் <Emoji symbol="🇱🇰" label="lk" />
      </Button>
      <Button
        style={buttonStyles}
        color="info"
        onClick={() => {
          onLocaleButtonClicked("si", onLocaleChange, i18n);
        }}
        active={isLocaleButtonActive(locale, "si")}
      >
        සිංහල <Emoji symbol="🇱🇰" label="lk" />
      </Button>
    </ButtonGroup>
  </div>
);

export default LocaleSelector;
