const colors = {
  blue: "#1B97D9",
  white: "#FFFFFF",
  mustard: "#EDD340",
  darkGrey: "#333333",
  salmon: "#ff5d5d",
  lightGrey: "#777777",
};

const radii = {
  round: "3px",
  pill: "100px",
};

const borderWidths = {
  thin: "1px",
};

const fontSizes = {
  body: "1rem",
  bodyMobile: "1.2rem",
  button: "1rem",
  buttonMobile: "0.75rem",
  heading1: "2rem",
  heading1Mobile: "1.5rem",
  heading2: "1.5rem",
};

const lineHeights = {
  body: "1.75",
  bodyMobile: "1.5",
  heading1: "2",
};

const fontWeights = {
  regular: "500",
  bold: "700",
};

const space = {
  none: "0",
  half: "4px",
  one: "8px",
  two: "16px",
  four: "32px",
};

// Needed in case comparing breakpoints without `px`
export const breakpoints = {
  phone: 420,
  tablet: 1024,
  desktop: 1280,
};

// Needed to use `px` for design system
const pixelValueBreakpoints = Object.keys(breakpoints).reduce(
  (pixelBreakpoints, key) => ({
    ...pixelBreakpoints,
    [key]: `${breakpoints[key]}px`,
  }),
  {}
);

const zIndices = {
  modal: 9999,
};

const theme = {
  space,
  colors,
  radii,
  borderWidths,
  fontSizes,
  fontWeights,
  lineHeights,
  breakpoints: pixelValueBreakpoints,
  zIndices,
};

export default theme;
