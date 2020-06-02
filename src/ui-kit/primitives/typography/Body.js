import styled from "styled-components";
import Text from "./Text";

const Body = styled(Text).attrs({
  as: "p",
  fontSize: { _: "bodyMobile", phone: "body" },
  lineHeight: { _: "bodyMobile", phone: "body" },
})``;

export default Body;
