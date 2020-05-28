import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import theme from "ui-kit/theme";
import messages from "i18n";
import App from "./App";
import store from "./app/store";

const userLocale = window.navigator.userLanguage || window.navigator.language;

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider defaultLocale="en-US" locale={userLocale} messages={messages[userLocale]}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
