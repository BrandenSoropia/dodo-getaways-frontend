import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box } from "ui-kit";
import { isEscapePressed } from "common/keyboard-helpers";

const Backdrop = styled(Box)`
  cursor: pointer;
`;

const Modal = ({ children, isActive, handleClose }) => {
  /**
   * This is some magic that I cooked up to make the Escape key close the modal.
   * I was hoping this would work without the negative `tabIndex`, but for some
   * reason it needs it to actually pull the index from whatever was previously
   * focused on before the modal was opened!
   */
  const containerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      containerRef.current.focus();
    }
  }, [isActive, containerRef]);

  if (!isActive) {
    return null;
  }

  return (
    <Backdrop
      data-testid="modal-backdrop"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(isActive && { tabIndex: "-1" })}
      ref={containerRef}
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
        handleClose();
      }}
      onKeyDown={(e) => {
        e.stopPropagation();

        if (isEscapePressed(e)) {
          handleClose();
        }
      }}
    >
      {children}
    </Backdrop>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func,
  isActive: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  handleClose: () => {},
  isActive: false,
};

export default Modal;
