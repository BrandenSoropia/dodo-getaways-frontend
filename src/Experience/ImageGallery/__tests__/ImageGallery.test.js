import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "test-utils";
import userEvent from "@testing-library/user-event";
import mockImages from "../../__mocks__/mock-images";
import ImageGallery from "..";

// TODO: Write test for one image disabled all cycles and cycling through multiple images
describe("ImageGallery tests", () => {
  it("should support single image gallery view", () => {
    const { getByText, getByRole } = render(<ImageGallery images={[mockImages[0]]} />);

    expect(() => {
      getByRole("dialog");
    }).toThrow();

    const mainImage = getByRole("img", { alt: mockImages[0].altText });
    userEvent.click(mainImage);

    expect(getByRole("dialog", { open: true })).toBe(true);
  });
});
