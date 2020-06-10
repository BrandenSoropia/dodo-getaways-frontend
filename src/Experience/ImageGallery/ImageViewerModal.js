import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Modal, Box, FlatButton, Body } from "ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";

const ImageCycleButton = styled(FlatButton).attrs({
  height: { _: "50px", phone: "100%" },
  width: "50px",
  type: "button",
  position: "absolute",
  zIndex: "modal",
})``;

// Used to provide a11y button text but hide it visually for the chevron cycle buttons
const HiddenA11yText = styled(Body).attrs({ fontSize: 0 })``;

const ImageViewerModal = ({ parentSelectedImageIdx, setParentSelectedImageIdx, images }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(parentSelectedImageIdx);

  // Note why this is needed: https://stackoverflow.com/a/56574696
  useEffect(() => {
    setSelectedImageIdx(parentSelectedImageIdx);
  }, [parentSelectedImageIdx]);

  const currentImage = images?.[selectedImageIdx];
  const isActive = selectedImageIdx !== null;
  const canGoToPreviousImage = selectedImageIdx > 0;
  const canGoToNextImage = selectedImageIdx < images.length - 1;

  return (
    <Modal
      isActive={isActive}
      handleClose={() => {
        setSelectedImageIdx(null);
        setParentSelectedImageIdx(null);
      }}
    >
      {isActive && (
        <Box position="relative" height="100%" width="100%">
          <ImageCycleButton
            name="previous"
            bottom={0}
            left={0}
            disabled={!canGoToPreviousImage}
            onClick={(e) => {
              e.stopPropagation();

              if (canGoToPreviousImage) {
                setSelectedImageIdx(selectedImageIdx - 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <HiddenA11yText>
              <FormattedMessage id="PREVIOUS" />
            </HiddenA11yText>
          </ImageCycleButton>
          <Box
            width="100%"
            height="100%"
            background={`url(${currentImage.src})`}
            title={currentImage.altText}
            backgroundSize={{ _: "100%", phone: "75%" }}
            backgroundPosition="center center"
            backgroundRepeat="no-repeat"
          />
          <ImageCycleButton
            name="next"
            bottom={0}
            right={0}
            disabled={!canGoToNextImage}
            onClick={(e) => {
              e.stopPropagation();

              if (canGoToNextImage) {
                setSelectedImageIdx(selectedImageIdx + 1);
              }
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
            <HiddenA11yText>
              <FormattedMessage id="NEXT" />
            </HiddenA11yText>
          </ImageCycleButton>
        </Box>
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
  setParentSelectedImageIdx: PropTypes.func.isRequired,
};

ImageViewerModal.defaultProps = {
  parentSelectedImageIdx: null,
};

export default ImageViewerModal;
