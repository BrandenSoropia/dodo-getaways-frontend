import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "ui-kit/theme";
import { IntlProvider } from "react-intl";
import messages from "../src/i18n";

const userLocale = window.navigator.userLanguage || window.navigator.language;

addDecorator((storyFn) => (
  <IntlProvider defaultLocale="en-US" locale={userLocale} messages={messages[userLocale]}>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </IntlProvider>
));
