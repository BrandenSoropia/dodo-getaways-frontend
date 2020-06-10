import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Image, Grid } from "ui-kit";
import { isEnterPressed } from "common/keyboard-helpers";

const OneImageLayout = {
  gridTemplateColumns: "auto",
};

const TwoImageLayout = {
  gridTemplateColumns: "60% 40%",
};

const ThreeImageLayout = {
  gridTemplateColumns: "65% 35%",
  gridTemplateRows: "repeat(2, 1fr)",
};

const InteractiveImage = styled(Image).attrs({ role: "button" })`
  cursor: pointer;
`;

const MainImage = styled(InteractiveImage)`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const SecondaryImage = styled(InteractiveImage)`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

const TertiaryImage = styled(InteractiveImage)`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const orderedImageElements = [MainImage, SecondaryImage, TertiaryImage];

const layouts = [OneImageLayout, TwoImageLayout, ThreeImageLayout];

const CollageLayout = ({
  images,
  imageThreshold,
  setSelectedImageIdx,
  isMobileDimensionDevice,
}) => {
  let layout = OneImageLayout;

  if (!isMobileDimensionDevice) {
    layout = layouts[Math.min(images.length, imageThreshold) - 1];
  }

  const orderedImages = [];

  for (let i = 0; i < Math.min(images.length, imageThreshold); i++) {
    const { src, altText } = images[i];

    const OrderedImage = orderedImageElements[i];

    orderedImages.push(
      <OrderedImage
        isMobileDimensionDevice
        tabIndex="0"
        onClick={() => {
          setSelectedImageIdx(i);
        }}
        onKeyPress={(e) => {
          e.stopPropagation();

          if (isEnterPressed(e)) {
            setSelectedImageIdx(i);
          }
        }}
        borderRadius={isMobileDimensionDevice ? null : "round"}
        key={`image-gallery-image$-${src}`}
        src={src}
        alt={altText}
      />
    );
  }

  return (
    <Grid height={{ _: "240px", phone: "360px", desktop: "480px" }} width="100%" {...layout}>
      {orderedImages}
    </Grid>
  );
};

CollageLayout.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      altText: PropTypes.string,
    })
  ).isRequired,
  imageThreshold: PropTypes.number.isRequired,
  setSelectedImageIdx: PropTypes.func.isRequired,
  isMobileDimensionDevice: PropTypes.bool.isRequired,
};

export default CollageLayout;
