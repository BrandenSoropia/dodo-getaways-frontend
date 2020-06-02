import styled from "styled-components";
import { grid } from "styled-system";
import Box from "./Box";

// Probably overkill, but wanted to finally learn about this a bit!
const Grid = styled(Box).attrs({
  display: "grid",
})`
  ${grid}
`;

export default Grid;
