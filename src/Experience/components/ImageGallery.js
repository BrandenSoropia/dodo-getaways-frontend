import React from "react";
import PropTypes from "prop-types";
import { Flex, Image } from "ui-kit";

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
 */
const ImageGallery = ({ images }) => {
  return (
    <Flex marginBottom={{ _: "two", tablet: "four" }}>
      {images.map(({ src, altText }) => (
        <Image borderRadius="round" key={`image-gallery-image$-${src}`} src={src} alt={altText} />
      ))}
    </Flex>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
