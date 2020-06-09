import React from "react";
import ImageViewerModal from "./ImageViewerModal";
import mockImages from "../__mocks__/mock-images";

export default {
  title: `Experiences/ImageViewerModal`,
  component: ImageViewerModal,
};

export const SingleImageOnly = () => (
  <ImageViewerModal images={[mockImages[0]]} parentSelectedImageIdx={0} />
);

export const MultipleImages = () => (
  <ImageViewerModal images={mockImages} parentSelectedImageIdx={0} />
);
