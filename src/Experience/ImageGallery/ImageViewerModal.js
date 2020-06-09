import React, { useState } from "react";
import PropTypes from "prop-types";

import { Modal, Box } from "ui-kit";

const ImageViewerModal = ({ parentSelectedImageIdx, images }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(parentSelectedImageIdx);

  const currentImage = images?.[selectedImageIdx];
  const isActive = selectedImageIdx !== null;

  return (
    <Modal
      isActive={isActive}
      handleClose={() => {
        setSelectedImageIdx(null);
      }}
    >
      {isActive && (
        <Box
          width="100%"
          height="100%"
          background={`url(${currentImage.src})`}
          title={currentImage.altText}
          backgroundSize={{ _: "100%", phone: "75%" }}
          backgroundPosition="center center"
          backgroundRepeat="no-repeat"
        />
      )}
    </Modal>
  );
};

ImageViewerModal.propTypes = {
  parentSelectedImageIdx: PropTypes.number,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      altText: PropTypes.string,
    })
  ).isRequired,
};

ImageViewerModal.defaultProps = {
  parentSelectedImageIdx: null,
};

export default ImageViewerModal;
