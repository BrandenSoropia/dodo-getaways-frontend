import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Box from "./Box";
import Grid from "./Grid";

export default {
  title: `ui-kit/primitives/containers`,
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

const LeftSideBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const TopRightMockBox = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const BottomRightMockBox = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const BasicGrid = () => (
  <Grid
    textAlign="center"
    fontWeight="bold"
    gridTemplateColumns="repeat(2, 1fr)"
    gridTemplateRows="repeat(2, 1fr)"
  >
    <LeftSideBox width="100%" height="100%" backgroundColor="mustard">
      1
    </LeftSideBox>
    <TopRightMockBox width="100%" height="100%" backgroundColor="salmon">
      2
    </TopRightMockBox>
    <BottomRightMockBox width="100%" height="100%" backgroundColor="salmon">
      3
    </BottomRightMockBox>
  </Grid>
);
