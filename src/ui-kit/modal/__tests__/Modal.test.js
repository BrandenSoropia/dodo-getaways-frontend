import React, { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { Box, Body } from "ui-kit";
import { render, fireEvent } from "test-utils";
import userEvent from "@testing-library/user-event";
import { isEnterPressed } from "common/keyboard-helpers";

import Modal from "../Modal";

const Wrapper = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box>
      <button
        tabIndex="0"
        type="button"
        onClick={() => {
          setIsActive(true);
        }}
        onKeyDown={(e) => {
          if (isEnterPressed(e)) {
            setIsActive(true);
          }
        }}
      >
        Open Modal
      </button>
      <Modal
        isActive={isActive}
        handleClose={() => {
          setIsActive(false);
        }}
      >
        <Body>I'm inside a modal!</Body>
      </Modal>
    </Box>
  );
};

describe("Modal tests", () => {
  it("should support mouse events to open and close", () => {
    const { getByText, getByTestId } = render(<Wrapper />);

    expect(() => {
      getByText("I'm inside a modal!");
    }).toThrow();

    userEvent.click(getByText("Open Modal"));
    expect(getByText("I'm inside a modal!")).toBeVisible();

    userEvent.click(getByTestId("modal-backdrop"));
    expect(() => {
      getByText("I'm inside a modal!");
    }).toThrow();
  });

  it("should support keyboard events to open and close", () => {
    const { getByText, getByTestId } = render(<Wrapper />);

    expect(() => {
      getByText("I'm inside a modal!");
    }).toThrow();
    expect(document.body).toHaveFocus();

    userEvent.tab();

    const openModalButton = getByText("Open Modal");
    expect(openModalButton).toHaveFocus();
    fireEvent.keyDown(getByText("Open Modal"), { key: "Enter", code: "Enter" });
    expect(getByText("I'm inside a modal!")).toBeVisible();

    fireEvent.keyDown(getByTestId("modal-backdrop"), { key: "Escape", code: "Escape" });
    expect(() => {
      getByText("I'm inside a modal!");
    }).toThrow();
  });
});
