import React from "react";
import ImageGallery from "./index";
import mockImages from "../__mocks__/mock-images";

export default {
  title: `Experiences/ImageGallery`,
  component: ImageGallery,
};

export const SingleImageOnly = () => <ImageGallery images={[mockImages[0]]} />;

export const TwoImages = () => <ImageGallery images={mockImages.slice(0, 2)} />;

export const ThreeImages = () => <ImageGallery images={mockImages.slice(0, 3)} />;

export const FourImages = () => <ImageGallery images={mockImages} />;
