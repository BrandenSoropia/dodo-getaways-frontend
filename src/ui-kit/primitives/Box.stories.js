import React from "react";
import Box from "./Box";

export default {
  title: "Box",
  component: Box,
};

export const GenericBox = () => (
  <Box
    padding={2}
    borderRadius="round"
    borderWidth="thin"
    borderColor="darkGrey"
    borderStyle="solid"
  >
    Hello! I'm a boxed styled with styled-systems + styled-components theme!
  </Box>
);
