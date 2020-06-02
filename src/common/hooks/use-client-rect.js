import { useState, useCallback } from "react";

/**
 * Use this to measure a component's containing rectangle.
 * Use this by attaching ref to something, then rect will have a value on mount/unmount only!
 *
 * Source: https://reactjs.org/docs/hooks-faq.html
 */
const useClientRect = () => {
  const [rect, setRect] = useState(null);

  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);

  return [rect, ref];
};

export default useClientRect;
