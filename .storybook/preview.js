import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "ui-kit/theme";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
