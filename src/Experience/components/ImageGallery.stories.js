import React from "react";
import ImageVisitors from "common/assets/visitors.jpeg";
import ImageLiveYourBestLife from "common/assets/live-your-best-life.jpeg";
import ImageNewLife from "common/assets/new-life.jpeg";
import ImageGetAwayFromTheMaching from "common/assets/getaway-from-the-machine.jpeg";
// import { Box, theme } from "ui-kit";
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
        altText: "Our island is a hot spot for interesting travellers and sales folk!",
      },
    ]}
  />
);

export const TwoImages = () => (
  <ImageGallery
    images={[
      {
        src: ImageVisitors,
        altText: "Our island is a hot spot for interesting travellers and sales folk!",
      },
      {
        src: ImageLiveYourBestLife,
        altText: "Live your best life!",
      },
    ]}
  />
);

export const ThreeImages = () => (
  <ImageGallery
    images={[
      {
        src: ImageVisitors,
        altText: "Our island is a hot spot for interesting travellers and sales folk!",
      },
      {
        src: ImageLiveYourBestLife,
        altText: "Live your best life!",
      },
      {
        src: ImageGetAwayFromTheMaching,
        altText:
          "Feeling stuck in your day to day, like someone's watching you? If so, come to our island escape!",
      },
    ]}
  />
);

export const FourImages = () => (
  <ImageGallery
    images={[
      {
        src: ImageVisitors,
        altText: "Our island is a hot spot for interesting travellers and sales folk!",
      },
      {
        src: ImageLiveYourBestLife,
        altText: "Live your best life!",
      },
      {
        src: ImageGetAwayFromTheMaching,
        altText:
          "Feeling stuck in your day to day, like someone's watching you? If so, come to our island escape!",
      },
      {
        src: ImageNewLife,
        altText: "This island start from the dreams of a humble farmer.",
      },
    ]}
  />
);
