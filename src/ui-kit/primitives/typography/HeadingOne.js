import styled from "styled-components";
import Text from "./Text";

const HeadingOne = styled(Text).attrs({
  as: "h1",
  fontSize: "heading1",
  fontWeight: "bold",
  lineHeight: {
    _: "1.5",
    tablet: "2",
  },
})``;

export default HeadingOne;
