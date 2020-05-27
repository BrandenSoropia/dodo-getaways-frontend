import React from "react";
import PropTypes from "prop-types";
import { Box } from "ui-kit";

const Modal = ({ children, onBackdropClick, isActive }) => {
  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      left="0"
      width="100vw"
      height="100vh"
      zIndex="modal"
      background="lightGrey"
      display={isActive ? "block" : "none"}
      onClick={(e) => {
        e.stopPropagation();

        onBackdropClick();
      }}
    >
      {children}
    </Box>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onBackdropClick: PropTypes.func,
  isActive: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  onBackdropClick: () => {},
  isActive: false,
};

export default Modal;
