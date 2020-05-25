import React from "react";
import { FormattedMessage } from "react-intl";
import Box from "./Box";

export default {
  title: `ui-kit/primitives/Box`,
  component: Box,
};

export const GenericBox = () => (
  <Box
    padding="two"
    borderRadius="round"
    borderWidth="thin"
    borderColor="darkGrey"
    borderStyle="solid"
  >
    <FormattedMessage id="TEST_STRING" />
  </Box>
);
