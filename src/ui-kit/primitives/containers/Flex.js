import styled from "styled-components";
import { flexbox } from "styled-system";
import Box from "./Box";

const Flex = styled(Box).attrs({
  display: "flex",
})`
  ${flexbox}
`;

export default Flex;
