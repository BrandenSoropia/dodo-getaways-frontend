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
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: not-allowed;
  }
`;

export default FlatButton;
