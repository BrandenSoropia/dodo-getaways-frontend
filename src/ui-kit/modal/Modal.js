import React from "react";
import PropTypes from "prop-types";
import { Box } from "ui-kit";

const Modal = ({ children, onBackdropClick }) => {
  return (
    <Box
      width="100vw"
      height="100vh"
      zIndex="modal"
      background="lightGrey"
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
};

Modal.defaultProps = {
  children: null,
  onBackdropClick: () => {},
};

export default Modal;
