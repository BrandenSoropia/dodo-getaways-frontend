// Sourced from https,//developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
const KEYS = {
  ENTER: "Enter",
  ESC: "Esc", // IE/Edge specific value
  ESCAPE: "Escape",
};

/**
 * @function isEscapePressed returns true if given KeyboardEvent's key is a valid
 * escape key.
 * @param {KeyboardEvent} e
 * @return {boolean}
 */
export const isEscapePressed = (e) => [KEYS.ESC, KEYS.ESCAPE].includes(e.key);

export default KEYS;
