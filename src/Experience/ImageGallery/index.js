import React, { useState } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { breakpoints, Section, FlatButton } from "ui-kit";
import { useClientRect } from "common/hooks";
import { isEnterPressed } from "common/keyboard-helpers";
import ImageViewerModal from "./ImageViewerModal";
import CollageLayout from "./CollageLayout";

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
          <FormattedMessage id="SEE_ALL_PHOTOS" />
        </FlatButton>
      )}
      {/* TODO: Disable scroll when image view open */}
      <ImageViewerModal
        parentSelectedImageIdx={selectedImageIdx}
        images={images}
        setParentSelectedImageIdx={setSelectedImageIdx}
      />
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
