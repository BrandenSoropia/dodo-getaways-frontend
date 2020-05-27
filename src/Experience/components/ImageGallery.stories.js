import React from "react";
import ImageVisitors from "common/assets/visitors.jpeg";
import ImageLiveYourBestLift from "common/assets/live-your-best-life.jpeg";
import ImageGallery from "./ImageGallery";

export default {
  title: `Experiences/ImageGallery`,
  component: ImageGallery,
};

export const SingleImageOnly = () => (
  <ImageGallery
    images={[
      {
        src: ImageVisitors,
        altText: "Our island is a hot spot for interesting travellers!",
      },
    ]}
  />
);

export const TwoImages = () => (
  <ImageGallery
    images={[
      {
        src: ImageVisitors,
        altText: "Our island is a hot spot for interesting travellers!",
      },
      {
        src: ImageLiveYourBestLift,
        altText: "Live your best life!",
      },
    ]}
  />
);
