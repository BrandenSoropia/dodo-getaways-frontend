import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "test-utils";
import { theme } from "ui-kit";
import mockImages from "../../__mocks__/mock-images";
import ImageGallery from "..";

describe("ImageGallery tests", () => {
  beforeEach(() => {
    Element.prototype.getBoundingClientRect = jest.fn(() => {
      return {
        width: theme.breakpoints.desktop,
      };
    });
  });

  it("should support single image gallery view with disabled image cycling controls", () => {
    const { getByRole, getByTestId } = render(<ImageGallery images={[mockImages[0]]} />);

    expect(() => {
      getByRole("dialog");
    }).toThrow();

    const mainImage = getByRole("button", { alt: mockImages[0].altText });
    fireEvent.click(mainImage);

    expect(getByRole("dialog", { open: true })).toBeVisible();

    expect(getByRole("button", { name: "Previous" })).toBeDisabled();
    expect(getByRole("button", { name: "Next" })).toBeDisabled();

    fireEvent.click(getByTestId("modal-backdrop"));

    expect(() => {
      getByRole("dialog");
    }).toThrow();
  });

  it("should support multiple image gallery and user can cycle through images left to right", () => {
    const { getByRole, getByTestId, getAllByRole, getByTitle, getByText } = render(
      <ImageGallery images={mockImages} />
    );

    expect(() => {
      getByRole("dialog");
    }).toThrow();

    const mainImage = getAllByRole("button", { alt: mockImages[0].altText })[0];
    fireEvent.click(mainImage);

    expect(getByRole("dialog", { open: true })).toBeVisible();

    // First image, can't go back
    expect(getByTitle(mockImages[0].altText));
    expect(getByText("Previous")).toBeDisabled();
    expect(getByText("Next")).toBeEnabled();
    fireEvent.click(getByText("Next"));

    // Second image
    expect(getByTitle(mockImages[1].altText));
    expect(getByText("Previous")).toBeEnabled();
    expect(getByText("Next")).toBeEnabled();
    fireEvent.click(getByText("Next"));

    // Third image
    expect(getByTitle(mockImages[2].altText));
    expect(getByText("Previous")).toBeEnabled();
    expect(getByText("Next")).toBeEnabled();
    fireEvent.click(getByText("Next"));

    // Fourth and final image, can't go next anymore
    expect(getByTitle(mockImages[3].altText));
    expect(getByText("Previous")).toBeEnabled();
    expect(getByText("Next")).toBeDisabled();

    fireEvent.click(getByTestId("modal-backdrop"));

    expect(() => {
      getByRole("dialog");
    }).toThrow();
  });
});
