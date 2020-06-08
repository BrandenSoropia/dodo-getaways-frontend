import React from "react";
import Button from "./Button";
import FlatButton from "./FlatButton";

export default {
  title: `ui-kit/primitives/buttons`,
};

export const allButtons = () => (
  <div>
    <Button onClick={() => alert("clicked")}>I'm a button!</Button>
    <FlatButton onClick={() => alert("clicked")}>I'm a flat button</FlatButton>
  </div>
);
