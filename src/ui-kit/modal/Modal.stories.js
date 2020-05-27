/* eslint-disable no-alert */
import React from "react";
import { Box, Body } from "ui-kit";
import Modal from "./Modal";

export default {
  title: `ui-kit/modal`,
  component: Modal,
};

export const simpleModal = () => (
  <Box
    width="100vw"
    height="100vh"
    onClick={() => {
      alert("You shouldn't see me!");
    }}
  >
    <Modal
      onBackdropClick={() => {
        alert("You triggered the modal's onBackdropClick! Dismiss to make the modal disappear!");
      }}
      isInitiallyActive
    >
      <Body>Click me!</Body>
    </Modal>
  </Box>
);
