import styled from "styled-components";
import { space, color, typography, layout, background, position } from "styled-system";

const Text = styled.p`
${"" /* Allows overriding by style props if defined before! */}
  margin: 0; 

  ${color}
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${background}
  ${position}
`;

export default Text;
