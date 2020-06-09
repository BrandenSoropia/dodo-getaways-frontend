// test-utils.js
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import theme from "ui-kit/theme";
import messages from "i18n";
import store from "app/store";

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <IntlProvider locale="en-US" messages={messages["en-US"]}>
          {children}
        </IntlProvider>
      </Provider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
