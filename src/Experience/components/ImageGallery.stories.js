import React from "react";
import ImageVisitors from "common/assets/visitors.jpeg";
import ImageLiveYourBestLift from "common/assets/live-your-best-life.jpeg";
import { Box } from "ui-kit";
import ImageGallery from "./ImageGallery";

export default {
  title: `Experiences/ImageGallery`,
  component: ImageGallery,
};

export const SingleImageOnly = () => (
  <Box width="500px">
    <ImageGallery
      images={[
        {
          src: ImageVisitors,
          altText: "Our island is a hot spot for interesting travellers!",
        },
      ]}
    />
  </Box>
);

export const TwoImages = () => (
  <Box width="500px">
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
  </Box>
);
