import React from "react";
import PropTypes from "prop-types";
import { Flex, Image } from "ui-kit";

/**
 * Desktop: Show collage
 * Mobile/Table: Show single image and open gallery in pop
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
