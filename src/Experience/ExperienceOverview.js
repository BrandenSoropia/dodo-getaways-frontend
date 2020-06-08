import React from "react";
import PropTypes from "prop-types";
import { Section, Box, HeadingOne, Span, Body } from "ui-kit";
import { FormattedMessage } from "react-intl";
import ImageGallery from "./components/ImageGallery";

const ExperienceOverview = ({ islandName, images, catchPhrase, description }) => {
  return (
    <Box>
      <HeadingOne marginBottom="two">
        <FormattedMessage
          id="EXPLORE_ISLAND_NAME"
          values={{
            b: (...chunks) => <Span color="salmon">{chunks}</Span>,
            islandName,
          }}
        />
      </HeadingOne>
      <ImageGallery images={images} />
      <Section paddingX="one">
        <HeadingOne marginBottom="one">{catchPhrase}</HeadingOne>
        <Body>{description}</Body>
      </Section>
    </Box>
  );
};

ExperienceOverview.propTypes = {
  islandName: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      altText: PropTypes.string,
    })
  ).isRequired,
  catchPhrase: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceOverview;
