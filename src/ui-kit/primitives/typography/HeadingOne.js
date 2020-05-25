import styled from "styled-components";
import Text from "./Text";

const HeadingOne = styled(Text).attrs({
  as: "h1",
  fontSize: "heading1",
  fontWeight: "bold",
  lineHeight: "heading1",
})``;

export default HeadingOne;
