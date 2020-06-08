import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Flex, Image, Modal, Body, breakpoints, Grid, Section } from "ui-kit";
import { useClientRect } from "common/hooks";
import { FormattedMessage } from "react-intl";
import { isEnterPressed } from "common/keyboard-helpers";

const InteractiveImage = styled(Image)`
  cursor: pointer;
`;

const DESKTOP_MORE_PHOTOS_THRESHOLD = 3;
const MOBILE_MORE_PHOTOS_THRESHOLD = 1;

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
  const [selectedImageIdx, setSelectedImageIdx] = useState(null);
  const [rect, ref] = useClientRect();

  const isMobileDimensionDevice = (rect?.width || 0) <= breakpoints.phone;
  const imageThreshold = isMobileDimensionDevice
    ? DESKTOP_MORE_PHOTOS_THRESHOLD
    : MOBILE_MORE_PHOTOS_THRESHOLD;

  const showSeeAllImagesButton = images.length > imageThreshold;

  return (
    <Section ref={ref} position="relative" as="section" marginBottom={{ _: "two", tablet: "four" }}>
      {isMobileDimensionDevice && (
        <InteractiveImage
          tabIndex="0"
          onClick={() => {
            setSelectedImageIdx(0);
          }}
          onKeyPress={(e) => {
            e.stopPropagation();

            if (isEnterPressed(e)) {
              setSelectedImageIdx(0);
            }
          }}
          borderRadius="round"
          key={`image-gallery-image$-${images[0]?.src}`}
          src={images[0]?.src}
          alt={images[0]?.altText}
        />
      )}
      {/* TODO: Set height somehow */}
      {!isMobileDimensionDevice && (
        <Grid
          height={{ _: "100%", phone: "700px" }}
          gridTemplateColumns="repeat(2, 1fr)"
          gridTemplateRows="repeat(2, 1fr)"
        >
          {images.map(({ src, altText }, idx) => {
            return (
              <InteractiveImage
                tabIndex="0"
                onClick={() => {
                  setSelectedImageIdx(idx);
                }}
                onKeyPress={(e) => {
                  e.stopPropagation();

                  if (isEnterPressed(e)) {
                    setSelectedImageIdx(idx);
                  }
                }}
                borderRadius="round"
                key={`image-gallery-image$-${src}`}
                src={src}
                alt={altText}
              />
            );
          })}
        </Grid>
      )}
      {showSeeAllImagesButton && (
        <Box
          backgroundColor="darkGrey"
          position="absolute"
          left="0"
          bottom="0"
          padding={{ _: "one", phone: "two" }}
          margin="one"
          borderRadius="pill"
        >
          <Body color="white">
            <FormattedMessage id="SEE_ALL_PHOTOS" />
          </Body>
        </Box>
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
