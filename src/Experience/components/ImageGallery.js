import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { Flex, Image, Modal, breakpoints, Grid, Section, FlatButton } from "ui-kit";
import { useClientRect } from "common/hooks";
import { isEnterPressed } from "common/keyboard-helpers";

const DESKTOP_MORE_PHOTOS_THRESHOLD = 3;
const MOBILE_MORE_PHOTOS_THRESHOLD = 1;

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

const InteractiveImage = styled(Image)`
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

/**
 * Clicking/tab navigation and keyboard "Enter" button press to simulate clicking image.
 *
 * Desktop: Collage Layout
 * - If only one image, fill gallery with it only.
 * - If 2 images split into 2 sections: left (main) one is 60% width, right is 40% full with height
 * - if 3 images split into 2 sections: left (main) one is 60% width, right is 40% where
 *   right section is split horizontally into 2 even halves.
 * - If 4 images, show "See all photos" button. On click, opens gallery.
 *
 * Mobile/Tablet:
 * - IF only one image, show single image
 * - If more than one, show "See all photos" button. On click, opens gallery.
 */
const ImageGallery = ({ images }) => {
  const { formatMessage } = useIntl();
  const [selectedImageIdx, setSelectedImageIdx] = useState(null);
  const [rect, ref] = useClientRect();

  const isMobileDimensionDevice = (rect?.width || 0) <= breakpoints.phone;
  const imageThreshold = isMobileDimensionDevice
    ? MOBILE_MORE_PHOTOS_THRESHOLD
    : DESKTOP_MORE_PHOTOS_THRESHOLD;

  const showSeeAllImagesButton = images.length > imageThreshold;

  return (
    <Section ref={ref} position="relative" as="section" marginBottom={{ _: "two", tablet: "four" }}>
      <CollageLayout
        images={images}
        isMobileDimensionDevice={isMobileDimensionDevice}
        setSelectedImageIdx={setSelectedImageIdx}
        imageThreshold={imageThreshold}
      />
      {showSeeAllImagesButton && (
        <FlatButton
          border="none"
          backgroundColor="darkGrey"
          position="absolute"
          left="0"
          bottom="0"
          padding={{ _: "one", phone: "two" }}
          margin="one"
          onClick={() => {
            setSelectedImageIdx(0);
          }}
          onKeyPress={(e) => {
            e.stopPropagation();

            if (isEnterPressed(e)) {
              setSelectedImageIdx(0);
            }
          }}
        >
          {formatMessage({ id: "SEE_ALL_PHOTOS" })}
        </FlatButton>
      )}
      <Modal
        isActive={selectedImageIdx !== null}
        handleClose={() => {
          setSelectedImageIdx(null);
        }}
      >
        {selectedImageIdx !== null && (
          <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
            <Image
              src={images?.[selectedImageIdx]?.src}
              alt={images?.[selectedImageIdx]?.altText}
              width="75%"
              height="75%"
            />
          </Flex>
        )}
      </Modal>
    </Section>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      altText: PropTypes.string,
    })
  ).isRequired,
};

export default ImageGallery;
