import React, { useState } from "react";
import { Box, Body } from "ui-kit";
import Modal from "./Modal";

export default {
  title: `ui-kit/modal`,
  component: Modal,
};

const ModalWrapper = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Box width="100vw" height="100vh" onClick={() => {}}>
      <button
        type="button"
        onClick={() => {
          setIsActive(true);
        }}
      >
        Open Modal
      </button>
      <Modal
        handleClose={() => {
          setIsActive(false);
        }}
        isActive={isActive}
      >
        <Body>Click me to close!</Body>
      </Modal>
    </Box>
  );
};

export const simpleModal = () => <ModalWrapper />;
