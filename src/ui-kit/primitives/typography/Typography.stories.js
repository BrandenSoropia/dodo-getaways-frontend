import React from "react";
import Body from "./Body";
import HeadingOne from "./HeadingOne";

export default {
  title: `ui-kit/primitives/Typography`,
};

export const GenericTextHierarchy = () => (
  <div>
    <Body padding={2} fontSize="body">
      I&apos;m a regular Body
    </Body>
    <Body padding={2} fontSize="body" fontWeight="bold">
      I&apos;m a bold Body
    </Body>
    <HeadingOne padding={2}>Hello! I&apos;m HeadingOne!</HeadingOne>
  </div>
);
