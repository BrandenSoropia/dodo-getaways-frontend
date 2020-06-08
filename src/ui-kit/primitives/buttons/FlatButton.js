import styled from "styled-components";
import Button from "./Button";

const FlatButton = styled(Button).attrs({
  border: "none",
  color: "white",
  backgroundColor: "darkGrey",
})`
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;

export default FlatButton;
