// @flow
import "./styles/app.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { withNamespaces } from "react-i18next";
import { Container } from "reactstrap";

import Heading from "../components/Heading";
import ContactInfo from "../components/ContactInfo";
import ProfileInfo from "../components/ProfileInfo";
import LocaleSelector from "../components/LocaleSelector";
import TechStackListView from "../components/list/TechStackListView";

import techStackObj from "../data/tech_stack.json";

import { onLocaleChange } from "../actions";

type Props = {
  t: Function,
  i18n: Object,
  locale: string,
  onLocaleChange: (locale?: string) => Object
};
class App extends Component<Props> {
  componentDidMount() {
    /* eslint-disable */
    let defaultLocale = localStorage.getItem("i18nextLng");
    const { onLocaleChange } = this.props;
    onLocaleChange(defaultLocale ? defaultLocale : "en-US");
    /* eslint-enable */
  }

  render() {
    const { t, i18n, onLocaleChange, locale } = this.props;
    const { techStack } = techStackObj;
    return (
      <Container>
        <div className="App-Container">
          <LocaleSelector
            locale={locale}
            i18n={i18n}
            onLocaleChange={onLocaleChange}
          />
          <ProfileInfo t={t} />
          <Heading t={t} title="placeholders.contact_info" />
          <ContactInfo t={t} />
          <Heading t={t} title="placeholders.experiences" />
          <TechStackListView t={t} techStackList={techStack} />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ locale: state.app.locale });

// $FlowFixMe
const AppContainer = connect(mapStateToProps, {
  onLocaleChange
})(withNamespaces("translations")(App));

export default AppContainer;
