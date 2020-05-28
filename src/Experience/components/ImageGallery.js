import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Image, Modal } from "ui-kit";
import { isEnterPressed } from "common/keyboard-helpers";

const InteractiveImage = styled(Image)`
  cursor: pointer;
`;

/**
 * Desktop: Show collage
 * - If only one image, fill gallery with it only.
 * - If 2 images split into 2 sections: left (main) one is 60% width, right is 40% full with height
 * - if 3 images split into 2 sections: left (main) one is 60% width, right is 40% where
 *   right section is split horizontally into 2 even halves.
 *
 * Mobile/Table: Show single image and open gallery in pop
 *
 * On image click open carousel of all images.
 *
 * Handles tab navigation and keyboard "Enter" button press to select images.
 */

// TODO: Focus on modal when opened
// TODO: close on escape
const ImageGallery = ({ images }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(null);

  return (
    <Flex as="section" marginBottom={{ _: "two", tablet: "four" }}>
      {images.map(({ src, altText }, idx) => (
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
      ))}
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
    </Flex>
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
