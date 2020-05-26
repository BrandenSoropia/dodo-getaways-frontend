import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withA11y } from "@storybook/addon-a11y";
import { addParameters } from "@storybook/client-api";

import theme from "ui-kit/theme";
import { IntlProvider } from "react-intl";
import messages from "../src/i18n";

const userLocale = window.navigator.userLanguage || window.navigator.language;

addDecorator((storyFn) => (
  <IntlProvider defaultLocale="en-US" locale={userLocale} messages={messages[userLocale]}>
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </IntlProvider>
));

addDecorator(withA11y);

addParameters({
  viewport: {
    viewports: [
      {
        name: "iPhone 6",
        styles: {
          width: "375px",
          height: "667px",
        },
        type: "mobile",
      },
      {
        name: "iPad (Horizontal)",
        styles: {
          width: "1024px",
          height: "768px",
        },
        type: "tablet",
      },
      {
        name: "iPad (Vertical)",
        styles: {
          width: "768px",
          height: "1024px",
        },
        type: "tablet",
      },
    ],
  },
});
